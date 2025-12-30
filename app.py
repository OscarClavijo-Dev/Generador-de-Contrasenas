from flask import Flask, render_template, request
import string
import random

app = Flask(__name__)

def generar_contrasena(longitud):
    caracteres = string.ascii_letters + string.digits + string.punctuation
    return "".join(random.choice(caracteres) for i in range(longitud))

@app.route("/", methods=["GET", "POST"])

def index():
    contrasena = None

    if request.method == "POST":
        longitud = int(request.form["longitud"])
        contrasena = generar_contrasena(longitud)

    return render_template("index.html", contrasena=contrasena)

if __name__ == "__main__":
    app.run(debug=True)





