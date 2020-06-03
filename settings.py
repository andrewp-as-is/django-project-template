from django_ec2_configuration import EC2Configuration
from django_google_analytics_configuration import GoogleAnalyticsConfiguration
from django_starter_configuration import StarterConfiguration
from django_webpack_configuration import WebpackDevConfiguration, WebpackProdConfiguration

class Base(StarterConfiguration,GoogleAnalyticsConfiguration):
    APPS_FILE = 'apps.txt'
    APPS_FIND = True
    TEMPLATES_CONTEXT_PROCESSORS_FILE = 'context_processors.txt'

class Dev(Base,WebpackDevConfiguration):
    DEBUG = True

class Prod(Base,EC2Configuration,WebpackProdConfiguration):
    ALLOWED_HOSTS=['.currenttime42.com']
