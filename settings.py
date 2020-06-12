import os

from django_configurations_base import BaseConfiguration
from django_configurations_ec2 import EC2Configuration
from django_configurations_github_oauth import GithubOAuthConfiguration
from django_configurations_google_analytics import GoogleAnalyticsConfiguration
from django_configurations_webpack import WebpackDevConfiguration, WebpackProdConfiguration


class Base(BaseConfiguration,GithubOAuthConfiguration,GoogleAnalyticsConfiguration):
    INSTALLED_APPS_FILE = 'apps.txt'
    INSTALLED_APPS_FIND = True
    MIDDLEWARE_FILE = 'middleware.txt'
    TEMPLATES_CONTEXT_PROCESSORS_FILE = 'context_processors.txt'

class Dev(Base,WebpackDevConfiguration):
    DEBUG = True

class Prod(Base,EC2Configuration,WebpackProdConfiguration):
    ALLOWED_HOSTS=['.domain.com']
