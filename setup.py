import sys
sys.path.append("./app/modules")
from setuptools import setup, find_packages

def readme():
    with open('README.rst') as f:
        return f.read()

def get_version():
    with open('VERSION') as f:
        return f.read()

setup(
    name="WeatherRoute",
    version=get_version(),
    description="Get Weather along the way.",
    url="https://github.com/prad23/WeatherRoute",
    author="Prad23",
    author_email="pradyu23@gmail.com",
 #   packages=find_packages("app",exclude=['contrib', 'docs', 'tests*']),
    packages=["app"],
    install_requires=["requests","unittest"],
    python_requires='>=3.5',
    py_modules=["os","weather","distance","config_loader","errors","location","logging"],
    keywords='weather route',
    include_package_data=True
 #   zip_safe=False
)
