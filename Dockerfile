FROM python:3.8-alpine

COPY ./ /code/
WORKDIR /code/

RUN pip install -r /code/requirements.txt

EXPOSE 8080
ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/bin/sh","/entrypoint.sh"]
