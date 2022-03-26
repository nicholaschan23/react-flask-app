from flask import Flask, jsonify

# from flask_cors import CORS

app = Flask(__name__, static_folder="./react-flask-app/build", static_url_path='/') # where static files are stored
# static_url_path is seen in front end, static_folder seen in backend

# CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/first_name/<input>", methods=["GET"])
def submit_button(input: str):
    if input == "Nick":
        output = "Chan"
    else:
        output = "User Not Found"
    return output

if __name__ == '__main__':
    app.run(debug=True) 