# Documentation of FastAPI
## Overview
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.
## Key features:

   ### Fast:
   Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic). One of the fastest Python frameworks available.
   ### Fast to code:
   Increase the speed to develop features by about 200% to 300%. *
   ### Fewer bugs:
   Reduce about 40% of human (developer) induced errors. *
   ### Intuitive:
   Great editor support. Completion everywhere. Less time debugging.
   ### Easy:
   Designed to be easy to use and learn. Less time reading docs.
   ### Short: 
   Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.
   ### Robust:
   Get production-ready code. With automatic interactive documentation.
   ### Standards-based:
   Based on (and fully compatible with) the open standards for APIs: OpenAPI (previously known as Swagger) and JSON Schema.

## Advantage of FastAPI

### Here are simple advantages of using FastAPI:

#### Easy to Learn and Use:
FastAPI is designed to be straightforward, especially for Python developers. Its simple and intuitive syntax, along with automatic documentation generation, makes it easy to get started and maintain.
#### High Performance:
FastAPI is built for speed. It’s one of the fastest Python web frameworks available, thanks to its asynchronous support and efficient data handling. This means your web applications can handle a large number of requests without slowing down.
#### Automatic Data Validation:
With FastAPI, you can use Python type hints to define the data structure you expect for your API requests and responses. FastAPI automatically validates the data, reducing the chances of errors caused by incorrect input.
#### Authentication and Authorization:
It provides simple ways to handle authentication and authorization, whether using OAuth2, JWT tokens, or custom methods.
#### Middleware:
We can easily add middleware to your FastAPI application for tasks like logging, authentication, or request/response modification.
## Implementation Details
1. **Clone the Repository:**
   ```
   git clone https://github.com/fastapi/fastapi.git
   cd fastapi
2. **Create a Virtual Environment:**
   ```python -m venv env
	source env/bin/activate
3. **Create it:**
   Create a file main.py with:
   
4. **Requirements:**
    FastAPI stands on the shoulders of giants:
    Starlette for the web parts.
    Pydantic for the data parts.
 5. **Run it:**
   ```
   $ fastapi dev main.py
   ```
 ## Example Code:
 ```
   from typing import Union
   from fastapi import FastAPI
   app = FastAPI()
   @app.get("/")
   def read_root():
       return {"Hello": "World"}

   @app.get("/items/{item_id}")
   def read_item(item_id: int, q: Union[str, None] = None):
       return {"item_id": item_id, "q": q}
