from flask import Flask, jsonify
from typing import Optional

# comment out when on heroku
# from flask_cors import CORS

# app = Flask(__name__, static_folder="react-flask-app/build", static_url_path="") 
app = Flask(__name__, static_folder="./react-flask-app/build", static_url_path='/') 
# where static files are stored
# static_url_path is seen in front end, static_folder seen in backend

# comment out when on heroku
# CORS(app)

# @app.route('/')
# def index():
#     return app.send_static_file('index.html')

# 2 routes to generate output
@app.route("/first_name/")
@app.route("/first_name/<input>", methods=["GET"])
def generate_output(input: Optional[str]=None):
    if input == "Nick":
        output = "Chan"
    else:
        output = "User Not Found"
    return jsonify(lastname=output)

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)