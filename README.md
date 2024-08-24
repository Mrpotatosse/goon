# aaa

To install dependencies:

```bash
bun install

bun build:out

bun db:migrate

touch .env
```

To run:

```bash
bun dev

# or

bun start <MULTIADDRESS>
```

This project was created using `bun init` in bun v1.1.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

```bash
# .env file
DATABASE_URL="file:./out/data.db"
DATABASE_AUTH_TOKEN="admin"
``` 