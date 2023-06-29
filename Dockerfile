FROM node:18

WORKDIR /app

ENV DATABASE_URL=postgresql://postgres:qb1RmHcB4WP9gegw@db.axcwazrplwtricuiztvw.supabase.co:5432/postgres
ENV SECRET_STRING=qsUB54i3eTnK8r9

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]

