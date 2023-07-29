# Front-end project for interface

## :art: Prototype

The prototype was builded using Figma Design Tool.

[Click here to see the UI/UX](https://www.figma.com/file/90zyaBNOt65fA0Ne42AKDW/design?type=design&node-id=0%3A1&mode=design&t=L2Xk6ddyxsAUDrPL-1)

## :sparkles: build and run

It's easy run the project using [multi-stage dockerfile]() available on root of project, just certify that your environment has `docker daemon` executing.

In the project root directory, execute:

```bash
docker build -t cnab-frontend .
```

Nice, the build are builded successfully.

Go expose this at 8080 port.

```bash
docker run -p 8080:80 cnab-frontend
```

## :computer: Screens

### Public

- Not found fallback screen (/\*!)
- Login page (/login)

### Private

#### Write role

- Upload CNAB file (load transactions) (/upload-cnab)

#### Read role

- Search by merchants (/merchants)
- Get merchant details (/merchant/{uuid})
