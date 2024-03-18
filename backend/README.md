## How to setup

```sh
python -m venv venv
```

On Windows

```sh
venv\Scripts\activate
```

On Unix or MacOS

```sh
source venv/bin/activate
```

Then install the dependencies with

```sh
pip install -r req.txt
```

## Then run app with

```
uvicorn main:app --reload
```
