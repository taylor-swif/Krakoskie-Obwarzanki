## How to setup

1. Create the environment from the YAML file:

   ```bash
   conda env create -f environment.yaml
   ```

   This command creates a new Conda environment with the same name and dependencies as specified in the `environment.yaml` file.

2. Activate the new environment:

   ```bash
   conda activate swmbackend
   ```

3. Run your application:

   If your application is a FastAPI application, you can run it using Uvicorn. Assuming your main file is `main.py`, you would use the following command:

   ```bash
   uvicorn main:app --reload
   ```

   The `--reload` flag enables hot reloading, which means the server will automatically update whenever you make changes to the code.

Remember to replace `main:app` with the appropriate module and application name if they're different in your project.
