FROM ruby:3.0.0
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt-get update -qq
RUN apt install -y nodejs && apt-get install -y yarn
RUN mkdir /trails
WORKDIR /trails
COPY ./backend/Gemfile /trails/Gemfile
# COPY Gemfile.lock /trails/Gemfile.lock
COPY ./backend/Procfile /trails/Procfile
RUN gem update --system
RUN bundle install
# COPY package.json /trails/package.json
# COPY yarn.lock /trails/yarn.lock
RUN yarn install --check-files
WORKDIR /trails
COPY ./backend /trails
EXPOSE 3000