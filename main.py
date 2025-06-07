from datetime import datetime

def define_env(env):
    env.variables['year'] = datetime.now().year
