""" server app"""
from flask import Flask, url_for, request, jsonify, redirect
from psycopg2 import connect, extras
from flask import render_template
from dotenv import load_dotenv
from os import environ

app = Flask(__name__)

host = environ.get('BD_HOST')
port = environ.get('DB_PORT')
dbname = environ.get('DB_NAME')
user = environ.get('DB_USER')
password = environ.get('DB_PASSWORD')


def get_connection():
    conn = connect(host=host, port=port, dbname=dbname,
                   user=user, password=password)
    return conn


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/users', methods=['GET', 'POST'])
def users():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    if request.method == 'POST':
        username = request.form['name']
        grade = request.form['grade']
        cur.execute(
            'INSERT INTO users (username, grade) VALUES (%s, %s) RETURNING *', (username, grade))
        rta = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()
        # rta = cur.fetchone()
        print(rta)
        return redirect(url_for('users'))
    elif request.method == 'GET':
        cur.execute('SELECT * FROM users')
        users = cur.fetchall()
        cur.close()
        conn.close()

        for index, elemento in enumerate(users):
            elemento['num'] = index + 1

        print('render users ====>', users)
        return render_template('users.html', users=users)


@app.get('/register/fingerprint/<id>')
def register_fingerprint(id):
    print(id)
    id_user = int(id)
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute(
        'UPDATE users SET fingerprint = TRUE WHERE id = %s RETURNING *', (id,))
    rta = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    print(rta)
    if rta is None:
        return 'Not found user'
    return jsonify(rta)


@app.route('/attendance')
def attendance():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute('SELECT * FROM users WHERE fingerprint = true')
    users = cur.fetchall()
    cur.close()
    conn.close()

    for index, elemento in enumerate(users):
        elemento['num'] = index + 1

    print('render users ====>', users)
    return render_template('attendance.html', users=users)


@app.route('/records')
def records():
    return render_template('records.html')
