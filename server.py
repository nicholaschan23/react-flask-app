from flask import Flask
import os

flask_app = Flask(__name__)
@flask_app.route('/')
def index():
    return flask_app.send_static_file('index.html')
if __name__ == '__main__':
    flask_app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))