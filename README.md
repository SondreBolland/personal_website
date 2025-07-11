# Personal Portfolio Website

Welcome to my personal portfolio website! This site is built using **Django** as the backend and **React** for the frontend. It showcases my academic and professional profile, including my biography, publications, selected projects, and skills I'm currently learning.

## Live Site

[https://sondrebolland.com/](https://sondrebolland.com/)

## Tech Stack

- **Backend:** Django (Python)
- **Frontend:** React (JavaScript)
- **Styling:** CSS (with custom components)

## Features

- **About Me:** An introduction to who I am and what I do.
- **Publications:** A list of academic and research publications with toggleable abstracts and external links.
- **Projects:** Showcases selected projects with links and brief descriptions.
- **Learning:** A dynamic section listing technologies and topics I'm currently exploring.
- **Footer:** Includes contact information and social/media links.
- **"Hear My Name" Button:** Plays an audio clip of my name pronunciation.

# Want your own personal website?
Copy mine then :) Just be sure to replace the content and give credit according to the license.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Backend Setup (Django)
I really should add requirements.txt, but alas. 

You will need various django modules.

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### 3. Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

## Folder structure
```
.
├── backend/
│   └── ... Django app files ...
├── frontend/
│   └── ... React app files ...
├── personal_website/
│   └── ... settings and url directing ...
└── README.md
```
