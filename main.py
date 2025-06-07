import os
import requests
from datetime import datetime

def define_env(env):
    repo = "xerolinuxdev/xero-build"
    branch = "main"
    api_url = f"https://api.github.com/repos/{repo}/commits/{branch}"

    # Optional: Use token from environment variable
    token = os.environ.get("GITHUB_TOKEN")  # safer than hardcoding
    headers = {"Authorization": f"token {token}"} if token else {}

    commit_id = "unknown"
    commit_date = "unknown"
    commit_message = "unknown"

    try:
        response = requests.get(api_url, headers=headers, timeout=10)
        response.raise_for_status()
        commit = response.json()

        commit_id = commit["sha"][:7]
        raw_date = commit["commit"]["committer"]["date"]
        parsed_date = datetime.strptime(raw_date, "%Y-%m-%dT%H:%M:%SZ")
        commit_date = parsed_date.strftime("%d-%m-%y")
        commit_message = commit["commit"]["message"].split('\n')[0]

    except Exception as e:
        print(f"[macros] Error fetching GitHub commit info: {e}")

    env.variables["git_commit"] = commit_id
    env.variables["git_commit_date"] = commit_date
    env.variables["git_commit_message"] = commit_message
    env.variables["build_date"] = datetime.now().strftime("%d-%m-%y")
