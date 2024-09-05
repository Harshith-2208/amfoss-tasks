# FastAPI
## Overview
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.
## Features
- Fast: Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic). One of the fastest Python frameworks available.
- Fast to code: Increase the speed to develop features by about 200% to 300%. *
- Fewer bugs: Reduce about 40% of human (developer) induced errors. *
- Intuitive: Great editor support. Completion everywhere. Less time debugging.
- Easy: Designed to be easy to use and learn. Less time reading docs.
- Short: Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.
- Robust: Get production-ready code. With automatic interactive documentation.
- Standards-based: Based on (and fully compatible with) the open standards for APIs: OpenAPI (previously known as Swagger) and JSON Schema.
  ## Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/fastapi/fastapi.git
   cd fastapi

2. **Create a Virtual Environment:**
   ```python -m venv env
	source env/bin/activate
   
3. **Create it**
   Create a file main.py with:
   ```bash
   from typing import Union

   from fastapi import FastAPI

   app = FastAPI()


   @app.get("/")
   def read_root():
       return {"Hello": "World"}

   @app.get("/items/{item_id}")
   def read_item(item_id: int, q: Union[str, None] = None):
       return {"item_id": item_id, "q": q}
4. **Requirements**

    FastAPI stands on the shoulders of giants:

    Starlette for the web parts.
    Pydantic for the data parts.
 

5. **Run it:**
   ```bash
   $ fastapi dev main.py
## Usage
Fast API is a high-performance, open-source Python web framework used to develop web APIs with the hint types of Python 3.6 or higher. It enables data types to be validated even within JSON requests. It is based on standards such as JSON Schema, OAuth 2.0 and OpenAPI
   
## Contribution Guidelines
- **Reporting Issues:** Please report any issues or bugs using the GitHub Issues tab.
- **Submitting Pull Requests:** Fork the repository, make your changes, and submit a pull request with a description of your changes.
