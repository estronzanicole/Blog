from flask import Flask, request, jsonify
app = Flask(__name__)


@app.route('/users', methods=['GET'])
def respond():
    admin = {
        "email": "marineepo@gmail.com",
        "password": "Buckeyefan1987"
    }

    return jsonify(admin)


@app.route('/')
def index():
    return "<h1>Welcome to The MeetUP!</h1>"


if __name__ == '__main__':
    app.run(threaded=True, port=5000)
