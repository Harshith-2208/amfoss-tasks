# Directory structure of FastAPI

```
.
├── CITATION.cff
├── CONTRIBUTING.md
├── docs
│   ├── az
│   │   ├── docs
│   │   │   ├── index.md
│   │   │   └── learn
│   │   │       └── index.md
│   │   └── mkdocs.yml
│   ├── bn
│   │   ├── docs
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   └── python-types.md
│   │   └── mkdocs.yml
│   ├── de
│   │   ├── docs
│   │   │   ├── about
│   │   │   │   └── index.md
│   │   │   ├── advanced
│   │   │   │   ├── additional-responses.md
│   │   │   │   ├── additional-status-codes.md
│   │   │   │   ├── advanced-dependencies.md
│   │   │   │   ├── async-tests.md
│   │   │   │   ├── behind-a-proxy.md
│   │   │   │   ├── custom-response.md
│   │   │   │   ├── dataclasses.md
│   │   │   │   ├── events.md
│   │   │   │   ├── generate-clients.md
│   │   │   │   ├── index.md
│   │   │   │   ├── middleware.md
│   │   │   │   ├── openapi-callbacks.md
│   │   │   │   ├── openapi-webhooks.md
│   │   │   │   ├── path-operation-advanced-configuration.md
│   │   │   │   ├── response-change-status-code.md
│   │   │   │   ├── response-cookies.md
│   │   │   │   ├── response-directly.md
│   │   │   │   ├── response-headers.md
│   │   │   │   ├── security
│   │   │   │   │   ├── http-basic-auth.md
│   │   │   │   │   ├── index.md
│   │   │   │   │   └── oauth2-scopes.md
│   │   │   │   ├── settings.md
│   │   │   │   ├── sub-applications.md
│   │   │   │   ├── templates.md
│   │   │   │   ├── testing-dependencies.md
│   │   │   │   ├── testing-events.md
│   │   │   │   ├── testing-websockets.md
│   │   │   │   ├── using-request-directly.md
│   │   │   │   ├── websockets.md
│   │   │   │   └── wsgi.md
│   │   │   ├── alternatives.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── contributing.md
│   │   │   ├── deployment
│   │   │   │   ├── cloud.md
│   │   │   │   ├── concepts.md
│   │   │   │   ├── docker.md
│   │   │   │   ├── https.md
│   │   │   │   ├── index.md
│   │   │   │   ├── manually.md
│   │   │   │   ├── server-workers.md
│   │   │   │   └── versions.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── history-design-future.md
│   │   │   ├── how-to
│   │   │   │   ├── conditional-openapi.md
│   │   │   │   ├── configure-swagger-ui.md
│   │   │   │   ├── custom-docs-ui-assets.md
│   │   │   │   ├── custom-request-and-route.md
│   │   │   │   ├── extending-openapi.md
│   │   │   │   ├── general.md
│   │   │   │   ├── graphql.md
│   │   │   │   ├── index.md
│   │   │   │   └── separate-openapi-schemas.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   ├── resources
│   │   │   │   └── index.md
│   │   │   └── tutorial
│   │   │       ├── background-tasks.md
│   │   │       ├── bigger-applications.md
│   │   │       ├── body-fields.md
│   │   │       ├── body.md
│   │   │       ├── body-multiple-params.md
│   │   │       ├── body-nested-models.md
│   │   │       ├── body-updates.md
│   │   │       ├── cookie-params.md
│   │   │       ├── dependencies
│   │   │       │   ├── classes-as-dependencies.md
│   │   │       │   ├── dependencies-in-path-operation-decorators.md
│   │   │       │   ├── dependencies-with-yield.md
│   │   │       │   ├── global-dependencies.md
│   │   │       │   ├── index.md
│   │   │       │   └── sub-dependencies.md
│   │   │       ├── encoder.md
│   │   │       ├── extra-data-types.md
│   │   │       ├── extra-models.md
│   │   │       ├── first-steps.md
│   │   │       ├── handling-errors.md
│   │   │       ├── header-params.md
│   │   │       ├── index.md
│   │   │       ├── metadata.md
│   │   │       ├── middleware.md
│   │   │       ├── path-operation-configuration.md
│   │   │       ├── path-params.md
│   │   │       ├── path-params-numeric-validations.md
│   │   │       ├── query-params.md
│   │   │       ├── query-params-str-validations.md
│   │   │       ├── request-files.md
│   │   │       ├── request-forms-and-files.md
│   │   │       ├── request-forms.md
│   │   │       ├── response-model.md
│   │   │       ├── response-status-code.md
│   │   │       ├── schema-extra-example.md
│   │   │       ├── security
│   │   │       │   ├── first-steps.md
│   │   │       │   ├── get-current-user.md
│   │   │       │   ├── index.md
│   │   │       │   ├── oauth2-jwt.md
│   │   │       │   └── simple-oauth2.md
│   │   │       ├── static-files.md
│   │   │       └── testing.md
│   │   └── mkdocs.yml
│   ├── em
│   │   ├── docs
│   │   │   ├── advanced
│   │   │   │   ├── additional-responses.md
│   │   │   │   ├── additional-status-codes.md
│   │   │   │   ├── advanced-dependencies.md
│   │   │   │   ├── async-tests.md
│   │   │   │   ├── behind-a-proxy.md
│   │   │   │   ├── custom-response.md
│   │   │   │   ├── dataclasses.md
│   │   │   │   ├── events.md
│   │   │   │   ├── generate-clients.md
│   │   │   │   ├── index.md
│   │   │   │   ├── middleware.md
│   │   │   │   ├── openapi-callbacks.md
│   │   │   │   ├── path-operation-advanced-configuration.md
│   │   │   │   ├── response-change-status-code.md
│   │   │   │   ├── response-cookies.md
│   │   │   │   ├── response-directly.md
│   │   │   │   ├── response-headers.md
│   │   │   │   ├── security
│   │   │   │   │   ├── http-basic-auth.md
│   │   │   │   │   ├── index.md
│   │   │   │   │   └── oauth2-scopes.md
│   │   │   │   ├── settings.md
│   │   │   │   ├── sub-applications.md
│   │   │   │   ├── templates.md
│   │   │   │   ├── testing-database.md
│   │   │   │   ├── testing-dependencies.md
│   │   │   │   ├── testing-events.md
│   │   │   │   ├── testing-websockets.md
│   │   │   │   ├── using-request-directly.md
│   │   │   │   ├── websockets.md
│   │   │   │   └── wsgi.md
│   │   │   ├── alternatives.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── contributing.md
│   │   │   ├── deployment
│   │   │   │   ├── concepts.md
│   │   │   │   ├── docker.md
│   │   │   │   ├── https.md
│   │   │   │   ├── index.md
│   │   │   │   ├── manually.md
│   │   │   │   ├── server-workers.md
│   │   │   │   └── versions.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── history-design-future.md
│   │   │   ├── how-to
│   │   │   │   ├── conditional-openapi.md
│   │   │   │   ├── custom-request-and-route.md
│   │   │   │   ├── extending-openapi.md
│   │   │   │   ├── graphql.md
│   │   │   │   └── sql-databases-peewee.md
│   │   │   ├── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   └── tutorial
│   │   │       ├── background-tasks.md
│   │   │       ├── bigger-applications.md
│   │   │       ├── body-fields.md
│   │   │       ├── body.md
│   │   │       ├── body-multiple-params.md
│   │   │       ├── body-nested-models.md
│   │   │       ├── body-updates.md
│   │   │       ├── cookie-params.md
│   │   │       ├── cors.md
│   │   │       ├── debugging.md
│   │   │       ├── dependencies
│   │   │       │   ├── classes-as-dependencies.md
│   │   │       │   ├── dependencies-in-path-operation-decorators.md
│   │   │       │   ├── dependencies-with-yield.md
│   │   │       │   ├── global-dependencies.md
│   │   │       │   ├── index.md
│   │   │       │   └── sub-dependencies.md
│   │   │       ├── encoder.md
│   │   │       ├── extra-data-types.md
│   │   │       ├── extra-models.md
│   │   │       ├── first-steps.md
│   │   │       ├── handling-errors.md
│   │   │       ├── header-params.md
│   │   │       ├── index.md
│   │   │       ├── metadata.md
│   │   │       ├── middleware.md
│   │   │       ├── path-operation-configuration.md
│   │   │       ├── path-params.md
│   │   │       ├── path-params-numeric-validations.md
│   │   │       ├── query-params.md
│   │   │       ├── query-params-str-validations.md
│   │   │       ├── request-files.md
│   │   │       ├── request-forms-and-files.md
│   │   │       ├── request-forms.md
│   │   │       ├── response-model.md
│   │   │       ├── response-status-code.md
│   │   │       ├── schema-extra-example.md
│   │   │       ├── security
│   │   │       │   ├── first-steps.md
│   │   │       │   ├── get-current-user.md
│   │   │       │   ├── index.md
│   │   │       │   ├── oauth2-jwt.md
│   │   │       │   └── simple-oauth2.md
│   │   │       ├── sql-databases.md
│   │   │       ├── static-files.md
│   │   │       └── testing.md
│   │   └── mkdocs.yml
│   ├── en
│   │   ├── data
│   │   │   ├── external_links.yml
│   │   │   ├── github_sponsors.yml
│   │   │   ├── members.yml
│   │   │   ├── people.yml
│   │   │   ├── sponsors_badge.yml
│   │   │   └── sponsors.yml
│   │   ├── docs
│   │   │   ├── about
│   │   │   │   └── index.md
│   │   │   ├── advanced
│   │   │   │   ├── additional-responses.md
│   │   │   │   ├── additional-status-codes.md
│   │   │   │   ├── advanced-dependencies.md
│   │   │   │   ├── async-tests.md
│   │   │   │   ├── behind-a-proxy.md
│   │   │   │   ├── custom-response.md
│   │   │   │   ├── dataclasses.md
│   │   │   │   ├── events.md
│   │   │   │   ├── generate-clients.md
│   │   │   │   ├── index.md
│   │   │   │   ├── middleware.md
│   │   │   │   ├── openapi-callbacks.md
│   │   │   │   ├── openapi-webhooks.md
│   │   │   │   ├── path-operation-advanced-configuration.md
│   │   │   │   ├── response-change-status-code.md
│   │   │   │   ├── response-cookies.md
│   │   │   │   ├── response-directly.md
│   │   │   │   ├── response-headers.md
│   │   │   │   ├── security
│   │   │   │   │   ├── http-basic-auth.md
│   │   │   │   │   ├── index.md
│   │   │   │   │   └── oauth2-scopes.md
│   │   │   │   ├── settings.md
│   │   │   │   ├── sub-applications.md
│   │   │   │   ├── templates.md
│   │   │   │   ├── testing-database.md
│   │   │   │   ├── testing-dependencies.md
│   │   │   │   ├── testing-events.md
│   │   │   │   ├── testing-websockets.md
│   │   │   │   ├── using-request-directly.md
│   │   │   │   ├── websockets.md
│   │   │   │   └── wsgi.md
│   │   │   ├── alternatives.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── contributing.md
│   │   │   ├── css
│   │   │   │   ├── custom.css
│   │   │   │   └── termynal.css
│   │   │   ├── deployment
│   │   │   │   ├── cloud.md
│   │   │   │   ├── concepts.md
│   │   │   │   ├── docker.md
│   │   │   │   ├── https.md
│   │   │   │   ├── index.md
│   │   │   │   ├── manually.md
│   │   │   │   ├── server-workers.md
│   │   │   │   └── versions.md
│   │   │   ├── environment-variables.md
│   │   │   ├── external-links.md
│   │   │   ├── fastapi-cli.md
│   │   │   ├── fastapi-people.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── history-design-future.md
│   │   │   ├── how-to
│   │   │   │   ├── async-sql-encode-databases.md
│   │   │   │   ├── conditional-openapi.md
│   │   │   │   ├── configure-swagger-ui.md
│   │   │   │   ├── custom-docs-ui-assets.md
│   │   │   │   ├── custom-request-and-route.md
│   │   │   │   ├── extending-openapi.md
│   │   │   │   ├── general.md
│   │   │   │   ├── graphql.md
│   │   │   │   ├── index.md
│   │   │   │   ├── nosql-databases-couchbase.md
│   │   │   │   ├── separate-openapi-schemas.md
│   │   │   │   └── sql-databases-peewee.md
│   │   │   ├── img
│   │   │   │   ├── async
│   │   │   │   │   ├── concurrent-burgers
│   │   │   │   │   │   ├── concurrent-burgers-01.png
│   │   │   │   │   │   ├── concurrent-burgers-02.png
│   │   │   │   │   │   ├── concurrent-burgers-03.png
│   │   │   │   │   │   ├── concurrent-burgers-04.png
│   │   │   │   │   │   ├── concurrent-burgers-05.png
│   │   │   │   │   │   ├── concurrent-burgers-06.png
│   │   │   │   │   │   └── concurrent-burgers-07.png
│   │   │   │   │   └── parallel-burgers
│   │   │   │   │       ├── parallel-burgers-01.png
│   │   │   │   │       ├── parallel-burgers-02.png
│   │   │   │   │       ├── parallel-burgers-03.png
│   │   │   │   │       ├── parallel-burgers-04.png
│   │   │   │   │       ├── parallel-burgers-05.png
│   │   │   │   │       └── parallel-burgers-06.png
│   │   │   │   ├── deployment
│   │   │   │   │   ├── concepts
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── process-ram.drawio
│   │   │   │   │   │   └── process-ram.svg
│   │   │   │   │   ├── deta
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   ├── image03.png
│   │   │   │   │   │   ├── image04.png
│   │   │   │   │   │   ├── image05.png
│   │   │   │   │   │   └── image06.png
│   │   │   │   │   └── https
│   │   │   │   │       ├── https01.drawio
│   │   │   │   │       ├── https01.svg
│   │   │   │   │       ├── https02.drawio
│   │   │   │   │       ├── https02.svg
│   │   │   │   │       ├── https03.drawio
│   │   │   │   │       ├── https03.svg
│   │   │   │   │       ├── https04.drawio
│   │   │   │   │       ├── https04.svg
│   │   │   │   │       ├── https05.drawio
│   │   │   │   │       ├── https05.svg
│   │   │   │   │       ├── https06.drawio
│   │   │   │   │       ├── https06.svg
│   │   │   │   │       ├── https07.drawio
│   │   │   │   │       ├── https07.svg
│   │   │   │   │       ├── https08.drawio
│   │   │   │   │       ├── https08.svg
│   │   │   │   │       ├── https.drawio
│   │   │   │   │       └── https.svg
│   │   │   │   ├── favicon.png
│   │   │   │   ├── github-social-preview.png
│   │   │   │   ├── github-social-preview.svg
│   │   │   │   ├── icon-white.svg
│   │   │   │   ├── index
│   │   │   │   │   ├── index-01-swagger-ui-simple.png
│   │   │   │   │   ├── index-02-redoc-simple.png
│   │   │   │   │   ├── index-03-swagger-02.png
│   │   │   │   │   ├── index-04-swagger-03.png
│   │   │   │   │   ├── index-05-swagger-04.png
│   │   │   │   │   └── index-06-redoc-02.png
│   │   │   │   ├── logo-margin
│   │   │   │   │   ├── logo-teal.png
│   │   │   │   │   ├── logo-teal.svg
│   │   │   │   │   ├── logo-teal-vector.svg
│   │   │   │   │   └── logo-white-bg.png
│   │   │   │   ├── logo-teal.svg
│   │   │   │   ├── logo-teal-vector.svg
│   │   │   │   ├── pycharm-completion.png
│   │   │   │   ├── python-types
│   │   │   │   │   ├── image01.png
│   │   │   │   │   ├── image02.png
│   │   │   │   │   ├── image03.png
│   │   │   │   │   ├── image04.png
│   │   │   │   │   ├── image05.png
│   │   │   │   │   └── image06.png
│   │   │   │   ├── sponsors
│   │   │   │   │   ├── budget-insight.svg
│   │   │   │   │   ├── bump-sh-banner.png
│   │   │   │   │   ├── bump-sh-banner.svg
│   │   │   │   │   ├── bump-sh.png
│   │   │   │   │   ├── bump-sh.svg
│   │   │   │   │   ├── calmcode.jpg
│   │   │   │   │   ├── classiq-banner.png
│   │   │   │   │   ├── classiq.png
│   │   │   │   │   ├── codacy.png
│   │   │   │   │   ├── coherence-banner.png
│   │   │   │   │   ├── coherence.png
│   │   │   │   │   ├── cryptapi-banner.svg
│   │   │   │   │   ├── cryptapi.svg
│   │   │   │   │   ├── databento.svg
│   │   │   │   │   ├── deta-banner.svg
│   │   │   │   │   ├── deta.svg
│   │   │   │   │   ├── docarray.svg
│   │   │   │   │   ├── docarray-top-banner.svg
│   │   │   │   │   ├── doist-banner.svg
│   │   │   │   │   ├── doist.svg
│   │   │   │   │   ├── dropbase-banner.svg
│   │   │   │   │   ├── dropbase.svg
│   │   │   │   │   ├── exoflare.png
│   │   │   │   │   ├── fastapi-course-bundle-banner.png
│   │   │   │   │   ├── fastapi-course-bundle-banner.svg
│   │   │   │   │   ├── fern-banner.png
│   │   │   │   │   ├── fern-banner.svg
│   │   │   │   │   ├── fern.png
│   │   │   │   │   ├── fern.svg
│   │   │   │   │   ├── fine-banner.png
│   │   │   │   │   ├── fine.png
│   │   │   │   │   ├── flint.png
│   │   │   │   │   ├── haystack-fastapi.svg
│   │   │   │   │   ├── imgwhale-banner.svg
│   │   │   │   │   ├── imgwhale.svg
│   │   │   │   │   ├── ines-course.jpg
│   │   │   │   │   ├── investsuite.svg
│   │   │   │   │   ├── jina2.svg
│   │   │   │   │   ├── jina-ai-banner.png
│   │   │   │   │   ├── jina-ai.png
│   │   │   │   │   ├── jina-banner.svg
│   │   │   │   │   ├── jina.svg
│   │   │   │   │   ├── jina-top-banner.svg
│   │   │   │   │   ├── kong-banner.png
│   │   │   │   │   ├── kong.png
│   │   │   │   │   ├── liblab-banner.png
│   │   │   │   │   ├── liblab.png
│   │   │   │   │   ├── mongodb-banner.png
│   │   │   │   │   ├── mongodb.png
│   │   │   │   │   ├── platform-sh-banner.png
│   │   │   │   │   ├── platform-sh.png
│   │   │   │   │   ├── porter-banner.png
│   │   │   │   │   ├── porter.png
│   │   │   │   │   ├── powens.png
│   │   │   │   │   ├── propelauth-banner.png
│   │   │   │   │   ├── propelauth.png
│   │   │   │   │   ├── reflex-banner.png
│   │   │   │   │   ├── reflex.png
│   │   │   │   │   ├── scalar-banner.svg
│   │   │   │   │   ├── scalar.svg
│   │   │   │   │   ├── speakeasy.png
│   │   │   │   │   ├── stainless.png
│   │   │   │   │   ├── striveworks2.png
│   │   │   │   │   ├── striveworks-banner.png
│   │   │   │   │   ├── striveworks.png
│   │   │   │   │   ├── svix.svg
│   │   │   │   │   ├── talkpython.png
│   │   │   │   │   ├── talkpython-v2.jpg
│   │   │   │   │   ├── testdriven.svg
│   │   │   │   │   ├── vimso.png
│   │   │   │   │   ├── wetransfer.svg
│   │   │   │   │   ├── zuplo-banner.png
│   │   │   │   │   └── zuplo.png
│   │   │   │   ├── tutorial
│   │   │   │   │   ├── additional-responses
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── async-sql-databases
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── behind-a-proxy
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   └── image03.png
│   │   │   │   │   ├── bigger-applications
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── package.drawio
│   │   │   │   │   │   └── package.svg
│   │   │   │   │   ├── body
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   ├── image03.png
│   │   │   │   │   │   ├── image04.png
│   │   │   │   │   │   └── image05.png
│   │   │   │   │   ├── body-fields
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   ├── body-nested-models
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── custom-response
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── dataclasses
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── debugging
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   ├── dependencies
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   ├── extending-openapi
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   ├── image03.png
│   │   │   │   │   │   └── image04.png
│   │   │   │   │   ├── generate-clients
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   ├── image03.png
│   │   │   │   │   │   ├── image04.png
│   │   │   │   │   │   ├── image05.png
│   │   │   │   │   │   ├── image06.png
│   │   │   │   │   │   ├── image07.png
│   │   │   │   │   │   └── image08.png
│   │   │   │   │   ├── graphql
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── metadata
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   ├── openapi-callbacks
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── openapi-webhooks
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── path-operation-advanced-configuration
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── path-operation-configuration
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   ├── image03.png
│   │   │   │   │   │   ├── image04.png
│   │   │   │   │   │   └── image05.png
│   │   │   │   │   ├── path-params
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   └── image03.png
│   │   │   │   │   ├── query-params-str-validations
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   ├── request-form-models
│   │   │   │   │   │   └── image01.png
│   │   │   │   │   ├── response-model
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   ├── response-status-code
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   ├── security
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   ├── image03.png
│   │   │   │   │   │   ├── image04.png
│   │   │   │   │   │   ├── image05.png
│   │   │   │   │   │   ├── image06.png
│   │   │   │   │   │   ├── image07.png
│   │   │   │   │   │   ├── image08.png
│   │   │   │   │   │   ├── image09.png
│   │   │   │   │   │   ├── image10.png
│   │   │   │   │   │   ├── image11.png
│   │   │   │   │   │   └── image12.png
│   │   │   │   │   ├── separate-openapi-schemas
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   ├── image02.png
│   │   │   │   │   │   ├── image03.png
│   │   │   │   │   │   ├── image04.png
│   │   │   │   │   │   └── image05.png
│   │   │   │   │   ├── sql-databases
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   ├── sub-applications
│   │   │   │   │   │   ├── image01.png
│   │   │   │   │   │   └── image02.png
│   │   │   │   │   └── websockets
│   │   │   │   │       ├── image01.png
│   │   │   │   │       ├── image02.png
│   │   │   │   │       ├── image03.png
│   │   │   │   │       ├── image04.png
│   │   │   │   │       └── image05.png
│   │   │   │   └── vscode-completion.png
│   │   │   ├── index.md
│   │   │   ├── js
│   │   │   │   ├── custom.js
│   │   │   │   └── termynal.js
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── management.md
│   │   │   ├── management-tasks.md
│   │   │   ├── newsletter.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   ├── reference
│   │   │   │   ├── apirouter.md
│   │   │   │   ├── background.md
│   │   │   │   ├── dependencies.md
│   │   │   │   ├── encoders.md
│   │   │   │   ├── exceptions.md
│   │   │   │   ├── fastapi.md
│   │   │   │   ├── httpconnection.md
│   │   │   │   ├── index.md
│   │   │   │   ├── middleware.md
│   │   │   │   ├── openapi
│   │   │   │   │   ├── docs.md
│   │   │   │   │   ├── index.md
│   │   │   │   │   └── models.md
│   │   │   │   ├── parameters.md
│   │   │   │   ├── request.md
│   │   │   │   ├── response.md
│   │   │   │   ├── responses.md
│   │   │   │   ├── security
│   │   │   │   │   └── index.md
│   │   │   │   ├── staticfiles.md
│   │   │   │   ├── status.md
│   │   │   │   ├── templating.md
│   │   │   │   ├── testclient.md
│   │   │   │   ├── uploadfile.md
│   │   │   │   └── websockets.md
│   │   │   ├── release-notes.md
│   │   │   ├── resources
│   │   │   │   └── index.md
│   │   │   ├── tutorial
│   │   │   │   ├── background-tasks.md
│   │   │   │   ├── bigger-applications.md
│   │   │   │   ├── body-fields.md
│   │   │   │   ├── body.md
│   │   │   │   ├── body-multiple-params.md
│   │   │   │   ├── body-nested-models.md
│   │   │   │   ├── body-updates.md
│   │   │   │   ├── cookie-params.md
│   │   │   │   ├── cors.md
│   │   │   │   ├── debugging.md
│   │   │   │   ├── dependencies
│   │   │   │   │   ├── classes-as-dependencies.md
│   │   │   │   │   ├── dependencies-in-path-operation-decorators.md
│   │   │   │   │   ├── dependencies-with-yield.md
│   │   │   │   │   ├── global-dependencies.md
│   │   │   │   │   ├── index.md
│   │   │   │   │   └── sub-dependencies.md
│   │   │   │   ├── encoder.md
│   │   │   │   ├── extra-data-types.md
│   │   │   │   ├── extra-models.md
│   │   │   │   ├── first-steps.md
│   │   │   │   ├── handling-errors.md
│   │   │   │   ├── header-params.md
│   │   │   │   ├── index.md
│   │   │   │   ├── metadata.md
│   │   │   │   ├── middleware.md
│   │   │   │   ├── path-operation-configuration.md
│   │   │   │   ├── path-params.md
│   │   │   │   ├── path-params-numeric-validations.md
│   │   │   │   ├── query-params.md
│   │   │   │   ├── query-params-str-validations.md
│   │   │   │   ├── request-files.md
│   │   │   │   ├── request-form-models.md
│   │   │   │   ├── request-forms-and-files.md
│   │   │   │   ├── request-forms.md
│   │   │   │   ├── response-model.md
│   │   │   │   ├── response-status-code.md
│   │   │   │   ├── schema-extra-example.md
│   │   │   │   ├── security
│   │   │   │   │   ├── first-steps.md
│   │   │   │   │   ├── get-current-user.md
│   │   │   │   │   ├── index.md
│   │   │   │   │   ├── oauth2-jwt.md
│   │   │   │   │   └── simple-oauth2.md
│   │   │   │   ├── sql-databases.md
│   │   │   │   ├── static-files.md
│   │   │   │   └── testing.md
│   │   │   └── virtual-environments.md
│   │   ├── mkdocs.insiders.yml
│   │   ├── mkdocs.maybe-insiders.yml
│   │   ├── mkdocs.no-insiders.yml
│   │   ├── mkdocs.yml
│   │   └── overrides
│   │       ├── main.html
│   │       └── partials
│   │           └── copyright.html
│   ├── es
│   │   ├── docs
│   │   │   ├── about
│   │   │   │   └── index.md
│   │   │   ├── advanced
│   │   │   │   ├── additional-status-codes.md
│   │   │   │   ├── index.md
│   │   │   │   ├── path-operation-advanced-configuration.md
│   │   │   │   ├── response-change-status-code.md
│   │   │   │   ├── response-directly.md
│   │   │   │   ├── response-headers.md
│   │   │   │   └── security
│   │   │   │       └── index.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── deployment
│   │   │   │   ├── index.md
│   │   │   │   └── versions.md
│   │   │   ├── features.md
│   │   │   ├── how-to
│   │   │   │   └── graphql.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   ├── resources
│   │   │   │   └── index.md
│   │   │   └── tutorial
│   │   │       ├── cookie-params.md
│   │   │       ├── first-steps.md
│   │   │       ├── index.md
│   │   │       ├── path-params.md
│   │   │       └── query-params.md
│   │   └── mkdocs.yml
│   ├── fa
│   │   ├── docs
│   │   │   ├── advanced
│   │   │   │   └── sub-applications.md
│   │   │   ├── features.md
│   │   │   ├── index.md
│   │   │   └── tutorial
│   │   │       ├── middleware.md
│   │   │       └── security
│   │   │           └── index.md
│   │   └── mkdocs.yml
│   ├── fr
│   │   ├── docs
│   │   │   ├── advanced
│   │   │   │   ├── additional-responses.md
│   │   │   │   ├── additional-status-codes.md
│   │   │   │   ├── index.md
│   │   │   │   ├── path-operation-advanced-configuration.md
│   │   │   │   └── response-directly.md
│   │   │   ├── alternatives.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── contributing.md
│   │   │   ├── deployment
│   │   │   │   ├── docker.md
│   │   │   │   ├── https.md
│   │   │   │   ├── index.md
│   │   │   │   ├── manually.md
│   │   │   │   └── versions.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── history-design-future.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   └── tutorial
│   │   │       ├── background-tasks.md
│   │   │       ├── body.md
│   │   │       ├── body-multiple-params.md
│   │   │       ├── debugging.md
│   │   │       ├── first-steps.md
│   │   │       ├── index.md
│   │   │       ├── path-params.md
│   │   │       ├── path-params-numeric-validations.md
│   │   │       ├── query-params.md
│   │   │       └── query-params-str-validations.md
│   │   └── mkdocs.yml
│   ├── he
│   │   ├── docs
│   │   │   └── index.md
│   │   └── mkdocs.yml
│   ├── hu
│   │   ├── docs
│   │   │   └── index.md
│   │   └── mkdocs.yml
│   ├── id
│   │   ├── docs
│   │   │   └── tutorial
│   │   │       └── index.md
│   │   └── mkdocs.yml
│   ├── it
│   │   ├── docs
│   │   │   └── index.md
│   │   └── mkdocs.yml
│   ├── ja
│   │   ├── docs
│   │   │   ├── advanced
│   │   │   │   ├── additional-status-codes.md
│   │   │   │   ├── custom-response.md
│   │   │   │   ├── index.md
│   │   │   │   ├── path-operation-advanced-configuration.md
│   │   │   │   ├── response-directly.md
│   │   │   │   └── websockets.md
│   │   │   ├── alternatives.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── contributing.md
│   │   │   ├── deployment
│   │   │   │   ├── concepts.md
│   │   │   │   ├── docker.md
│   │   │   │   ├── https.md
│   │   │   │   ├── index.md
│   │   │   │   ├── manually.md
│   │   │   │   ├── server-workers.md
│   │   │   │   └── versions.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── history-design-future.md
│   │   │   ├── how-to
│   │   │   │   └── conditional-openapi.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   └── tutorial
│   │   │       ├── background-tasks.md
│   │   │       ├── body-fields.md
│   │   │       ├── body.md
│   │   │       ├── body-multiple-params.md
│   │   │       ├── body-nested-models.md
│   │   │       ├── body-updates.md
│   │   │       ├── cookie-params.md
│   │   │       ├── cors.md
│   │   │       ├── debugging.md
│   │   │       ├── dependencies
│   │   │       │   ├── classes-as-dependencies.md
│   │   │       │   ├── dependencies-in-path-operation-decorators.md
│   │   │       │   ├── dependencies-with-yield.md
│   │   │       │   ├── index.md
│   │   │       │   └── sub-dependencies.md
│   │   │       ├── encoder.md
│   │   │       ├── extra-data-types.md
│   │   │       ├── extra-models.md
│   │   │       ├── first-steps.md
│   │   │       ├── handling-errors.md
│   │   │       ├── header-params.md
│   │   │       ├── index.md
│   │   │       ├── metadata.md
│   │   │       ├── middleware.md
│   │   │       ├── path-operation-configuration.md
│   │   │       ├── path-params.md
│   │   │       ├── path-params-numeric-validations.md
│   │   │       ├── query-params.md
│   │   │       ├── query-params-str-validations.md
│   │   │       ├── request-forms-and-files.md
│   │   │       ├── request-forms.md
│   │   │       ├── response-model.md
│   │   │       ├── response-status-code.md
│   │   │       ├── schema-extra-example.md
│   │   │       ├── security
│   │   │       │   ├── first-steps.md
│   │   │       │   ├── get-current-user.md
│   │   │       │   ├── index.md
│   │   │       │   └── oauth2-jwt.md
│   │   │       ├── static-files.md
│   │   │       └── testing.md
│   │   └── mkdocs.yml
│   ├── ko
│   │   ├── docs
│   │   │   ├── about
│   │   │   │   └── index.md
│   │   │   ├── advanced
│   │   │   │   ├── events.md
│   │   │   │   └── index.md
│   │   │   ├── async.md
│   │   │   ├── deployment
│   │   │   │   ├── cloud.md
│   │   │   │   ├── docker.md
│   │   │   │   ├── index.md
│   │   │   │   ├── server-workers.md
│   │   │   │   └── versions.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── python-types.md
│   │   │   └── tutorial
│   │   │       ├── background-tasks.md
│   │   │       ├── body-fields.md
│   │   │       ├── body.md
│   │   │       ├── body-multiple-params.md
│   │   │       ├── body-nested-models.md
│   │   │       ├── cookie-params.md
│   │   │       ├── cors.md
│   │   │       ├── debugging.md
│   │   │       ├── dependencies
│   │   │       │   ├── classes-as-dependencies.md
│   │   │       │   ├── dependencies-in-path-operation-decorators.md
│   │   │       │   ├── global-dependencies.md
│   │   │       │   └── index.md
│   │   │       ├── encoder.md
│   │   │       ├── extra-data-types.md
│   │   │       ├── first-steps.md
│   │   │       ├── header-params.md
│   │   │       ├── index.md
│   │   │       ├── middleware.md
│   │   │       ├── path-operation-configuration.md
│   │   │       ├── path-params.md
│   │   │       ├── path-params-numeric-validations.md
│   │   │       ├── query-params.md
│   │   │       ├── query-params-str-validations.md
│   │   │       ├── request-files.md
│   │   │       ├── request-forms-and-files.md
│   │   │       ├── response-model.md
│   │   │       ├── response-status-code.md
│   │   │       ├── schema-extra-example.md
│   │   │       ├── security
│   │   │       │   ├── get-current-user.md
│   │   │       │   └── simple-oauth2.md
│   │   │       └── static-files.md
│   │   └── mkdocs.yml
│   ├── language_names.yml
│   ├── missing-translation.md
│   ├── nl
│   │   ├── docs
│   │   │   ├── features.md
│   │   │   └── index.md
│   │   └── mkdocs.yml
│   ├── pl
│   │   ├── docs
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── index.md
│   │   │   └── tutorial
│   │   │       ├── first-steps.md
│   │   │       └── index.md
│   │   └── mkdocs.yml
│   ├── pt
│   │   ├── docs
│   │   │   ├── about
│   │   │   │   └── index.md
│   │   │   ├── advanced
│   │   │   │   ├── additional-responses.md
│   │   │   │   ├── additional-status-codes.md
│   │   │   │   ├── advanced-dependencies.md
│   │   │   │   ├── async-tests.md
│   │   │   │   ├── behind-a-proxy.md
│   │   │   │   ├── benchmarks.md
│   │   │   │   ├── events.md
│   │   │   │   ├── index.md
│   │   │   │   ├── openapi-webhooks.md
│   │   │   │   ├── response-change-status-code.md
│   │   │   │   ├── security
│   │   │   │   │   └── index.md
│   │   │   │   ├── settings.md
│   │   │   │   ├── sub-applications.md
│   │   │   │   ├── templates.md
│   │   │   │   ├── testing-dependencies.md
│   │   │   │   ├── testing-events.md
│   │   │   │   ├── testing-websockets.md
│   │   │   │   ├── using-request-directly.md
│   │   │   │   └── wsgi.md
│   │   │   ├── alternatives.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── contributing.md
│   │   │   ├── deployment
│   │   │   │   ├── docker.md
│   │   │   │   ├── https.md
│   │   │   │   ├── index.md
│   │   │   │   └── versions.md
│   │   │   ├── deployment.md
│   │   │   ├── fastapi-cli.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── history-design-future.md
│   │   │   ├── how-to
│   │   │   │   ├── general.md
│   │   │   │   └── index.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   ├── resources
│   │   │   │   └── index.md
│   │   │   └── tutorial
│   │   │       ├── background-tasks.md
│   │   │       ├── bigger-applications.md
│   │   │       ├── body-fields.md
│   │   │       ├── body.md
│   │   │       ├── body-multiple-params.md
│   │   │       ├── body-nested-models.md
│   │   │       ├── cookie-params.md
│   │   │       ├── cors.md
│   │   │       ├── dependencies
│   │   │       │   ├── classes-as-dependencies.md
│   │   │       │   ├── dependencies-in-path-operation-decorators.md
│   │   │       │   ├── dependencies-with-yield.md
│   │   │       │   ├── global-dependencies.md
│   │   │       │   ├── index.md
│   │   │       │   └── sub-dependencies.md
│   │   │       ├── encoder.md
│   │   │       ├── extra-data-types.md
│   │   │       ├── extra-models.md
│   │   │       ├── first-steps.md
│   │   │       ├── handling-errors.md
│   │   │       ├── header-params.md
│   │   │       ├── index.md
│   │   │       ├── middleware.md
│   │   │       ├── path-operation-configuration.md
│   │   │       ├── path-params.md
│   │   │       ├── path-params-numeric-validations.md
│   │   │       ├── query-params.md
│   │   │       ├── query-params-str-validations.md
│   │   │       ├── request_files.md
│   │   │       ├── request-forms-and-files.md
│   │   │       ├── request-forms.md
│   │   │       ├── response-status-code.md
│   │   │       ├── schema-extra-example.md
│   │   │       ├── security
│   │   │       │   ├── first-steps.md
│   │   │       │   └── index.md
│   │   │       └── static-files.md
│   │   └── mkdocs.yml
│   ├── ru
│   │   ├── docs
│   │   │   ├── about
│   │   │   │   └── index.md
│   │   │   ├── alternatives.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── contributing.md
│   │   │   ├── deployment
│   │   │   │   ├── concepts.md
│   │   │   │   ├── docker.md
│   │   │   │   ├── https.md
│   │   │   │   ├── index.md
│   │   │   │   ├── manually.md
│   │   │   │   └── versions.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── history-design-future.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   └── tutorial
│   │   │       ├── background-tasks.md
│   │   │       ├── body-fields.md
│   │   │       ├── body.md
│   │   │       ├── body-multiple-params.md
│   │   │       ├── body-nested-models.md
│   │   │       ├── body-updates.md
│   │   │       ├── cookie-params.md
│   │   │       ├── cors.md
│   │   │       ├── debugging.md
│   │   │       ├── dependencies
│   │   │       │   ├── classes-as-dependencies.md
│   │   │       │   ├── dependencies-in-path-operation-decorators.md
│   │   │       │   ├── dependencies-with-yield.md
│   │   │       │   ├── global-dependencies.md
│   │   │       │   ├── index.md
│   │   │       │   └── sub-dependencies.md
│   │   │       ├── encoder.md
│   │   │       ├── extra-data-types.md
│   │   │       ├── extra-models.md
│   │   │       ├── first-steps.md
│   │   │       ├── handling-errors.md
│   │   │       ├── header-params.md
│   │   │       ├── index.md
│   │   │       ├── metadata.md
│   │   │       ├── path-operation-configuration.md
│   │   │       ├── path-params.md
│   │   │       ├── path-params-numeric-validations.md
│   │   │       ├── query-params.md
│   │   │       ├── query-params-str-validations.md
│   │   │       ├── request-files.md
│   │   │       ├── request-forms-and-files.md
│   │   │       ├── request-forms.md
│   │   │       ├── response-model.md
│   │   │       ├── response-status-code.md
│   │   │       ├── schema-extra-example.md
│   │   │       ├── security
│   │   │       │   ├── first-steps.md
│   │   │       │   └── index.md
│   │   │       ├── static-files.md
│   │   │       └── testing.md
│   │   └── mkdocs.yml
│   ├── tr
│   │   ├── docs
│   │   │   ├── about
│   │   │   │   └── index.md
│   │   │   ├── advanced
│   │   │   │   ├── index.md
│   │   │   │   ├── security
│   │   │   │   │   └── index.md
│   │   │   │   ├── testing-websockets.md
│   │   │   │   └── wsgi.md
│   │   │   ├── alternatives.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── deployment
│   │   │   │   ├── cloud.md
│   │   │   │   └── index.md
│   │   │   ├── features.md
│   │   │   ├── history-design-future.md
│   │   │   ├── how-to
│   │   │   │   ├── general.md
│   │   │   │   └── index.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   ├── resources
│   │   │   │   └── index.md
│   │   │   └── tutorial
│   │   │       ├── cookie-params.md
│   │   │       ├── first-steps.md
│   │   │       ├── path-params.md
│   │   │       ├── query-params.md
│   │   │       ├── request-forms.md
│   │   │       └── static-files.md
│   │   └── mkdocs.yml
│   ├── uk
│   │   ├── docs
│   │   │   ├── alternatives.md
│   │   │   ├── index.md
│   │   │   ├── python-types.md
│   │   │   └── tutorial
│   │   │       ├── body-fields.md
│   │   │       ├── body.md
│   │   │       ├── cookie-params.md
│   │   │       ├── encoder.md
│   │   │       ├── extra-data-types.md
│   │   │       ├── first-steps.md
│   │   │       └── index.md
│   │   └── mkdocs.yml
│   ├── ur
│   │   ├── docs
│   │   │   └── benchmarks.md
│   │   └── mkdocs.yml
│   ├── vi
│   │   ├── docs
│   │   │   ├── features.md
│   │   │   ├── index.md
│   │   │   ├── python-types.md
│   │   │   └── tutorial
│   │   │       ├── first-steps.md
│   │   │       └── index.md
│   │   └── mkdocs.yml
│   ├── yo
│   │   ├── docs
│   │   │   └── index.md
│   │   └── mkdocs.yml
│   ├── zh
│   │   ├── docs
│   │   │   ├── advanced
│   │   │   │   ├── additional-responses.md
│   │   │   │   ├── additional-status-codes.md
│   │   │   │   ├── advanced-dependencies.md
│   │   │   │   ├── behind-a-proxy.md
│   │   │   │   ├── custom-response.md
│   │   │   │   ├── dataclasses.md
│   │   │   │   ├── events.md
│   │   │   │   ├── generate-clients.md
│   │   │   │   ├── index.md
│   │   │   │   ├── middleware.md
│   │   │   │   ├── openapi-callbacks.md
│   │   │   │   ├── path-operation-advanced-configuration.md
│   │   │   │   ├── response-change-status-code.md
│   │   │   │   ├── response-cookies.md
│   │   │   │   ├── response-directly.md
│   │   │   │   ├── response-headers.md
│   │   │   │   ├── security
│   │   │   │   │   ├── http-basic-auth.md
│   │   │   │   │   ├── index.md
│   │   │   │   │   └── oauth2-scopes.md
│   │   │   │   ├── settings.md
│   │   │   │   ├── sub-applications.md
│   │   │   │   ├── templates.md
│   │   │   │   ├── testing-database.md
│   │   │   │   ├── testing-dependencies.md
│   │   │   │   ├── testing-events.md
│   │   │   │   ├── testing-websockets.md
│   │   │   │   ├── using-request-directly.md
│   │   │   │   ├── websockets.md
│   │   │   │   └── wsgi.md
│   │   │   ├── async.md
│   │   │   ├── benchmarks.md
│   │   │   ├── contributing.md
│   │   │   ├── deployment
│   │   │   │   ├── cloud.md
│   │   │   │   ├── concepts.md
│   │   │   │   ├── docker.md
│   │   │   │   ├── https.md
│   │   │   │   ├── index.md
│   │   │   │   ├── manually.md
│   │   │   │   ├── server-workers.md
│   │   │   │   └── versions.md
│   │   │   ├── fastapi-cli.md
│   │   │   ├── features.md
│   │   │   ├── help-fastapi.md
│   │   │   ├── history-design-future.md
│   │   │   ├── how-to
│   │   │   │   ├── configure-swagger-ui.md
│   │   │   │   ├── general.md
│   │   │   │   └── index.md
│   │   │   ├── index.md
│   │   │   ├── learn
│   │   │   │   └── index.md
│   │   │   ├── project-generation.md
│   │   │   ├── python-types.md
│   │   │   └── tutorial
│   │   │       ├── background-tasks.md
│   │   │       ├── bigger-applications.md
│   │   │       ├── body-fields.md
│   │   │       ├── body.md
│   │   │       ├── body-multiple-params.md
│   │   │       ├── body-nested-models.md
│   │   │       ├── body-updates.md
│   │   │       ├── cookie-params.md
│   │   │       ├── cors.md
│   │   │       ├── debugging.md
│   │   │       ├── dependencies
│   │   │       │   ├── classes-as-dependencies.md
│   │   │       │   ├── dependencies-in-path-operation-decorators.md
│   │   │       │   ├── dependencies-with-yield.md
│   │   │       │   ├── global-dependencies.md
│   │   │       │   ├── index.md
│   │   │       │   └── sub-dependencies.md
│   │   │       ├── encoder.md
│   │   │       ├── extra-data-types.md
│   │   │       ├── extra-models.md
│   │   │       ├── first-steps.md
│   │   │       ├── handling-errors.md
│   │   │       ├── header-params.md
│   │   │       ├── index.md
│   │   │       ├── metadata.md
│   │   │       ├── middleware.md
│   │   │       ├── path-operation-configuration.md
│   │   │       ├── path-params.md
│   │   │       ├── path-params-numeric-validations.md
│   │   │       ├── query-params.md
│   │   │       ├── query-params-str-validations.md
│   │   │       ├── request-files.md
│   │   │       ├── request-forms-and-files.md
│   │   │       ├── request-forms.md
│   │   │       ├── response-model.md
│   │   │       ├── response-status-code.md
│   │   │       ├── schema-extra-example.md
│   │   │       ├── security
│   │   │       │   ├── first-steps.md
│   │   │       │   ├── get-current-user.md
│   │   │       │   ├── index.md
│   │   │       │   ├── oauth2-jwt.md
│   │   │       │   └── simple-oauth2.md
│   │   │       ├── sql-databases.md
│   │   │       ├── static-files.md
│   │   │       └── testing.md
│   │   └── mkdocs.yml
│   └── zh-hant
│       ├── docs
│       │   ├── benchmarks.md
│       │   ├── index.md
│       │   └── learn
│       │       └── index.md
│       └── mkdocs.yml
├── docs_src
│   ├── additional_responses
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003.py
│   │   └── tutorial004.py
│   ├── additional_status_codes
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   └── tutorial001_py310.py
│   ├── advanced_middleware
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   └── tutorial003.py
│   ├── app_testing
│   │   ├── app_b
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   └── test_main.py
│   │   ├── app_b_an
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   └── test_main.py
│   │   ├── app_b_an_py310
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   └── test_main.py
│   │   ├── app_b_an_py39
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   └── test_main.py
│   │   ├── app_b_py310
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   └── test_main.py
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── test_main.py
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   └── tutorial003.py
│   ├── async_sql_databases
│   │   └── tutorial001.py
│   ├── async_tests
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── test_main.py
│   ├── background_tasks
│   │   ├── tutorial001.py
│   │   ├── tutorial002_an.py
│   │   ├── tutorial002_an_py310.py
│   │   ├── tutorial002_an_py39.py
│   │   ├── tutorial002.py
│   │   └── tutorial002_py310.py
│   ├── behind_a_proxy
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003.py
│   │   └── tutorial004.py
│   ├── bigger_applications
│   │   ├── app
│   │   │   ├── dependencies.py
│   │   │   ├── __init__.py
│   │   │   ├── internal
│   │   │   │   ├── admin.py
│   │   │   │   └── __init__.py
│   │   │   ├── main.py
│   │   │   └── routers
│   │   │       ├── __init__.py
│   │   │       ├── items.py
│   │   │       └── users.py
│   │   ├── app_an
│   │   │   ├── dependencies.py
│   │   │   ├── __init__.py
│   │   │   ├── internal
│   │   │   │   ├── admin.py
│   │   │   │   └── __init__.py
│   │   │   ├── main.py
│   │   │   └── routers
│   │   │       ├── __init__.py
│   │   │       ├── items.py
│   │   │       └── users.py
│   │   ├── app_an_py39
│   │   │   ├── dependencies.py
│   │   │   ├── __init__.py
│   │   │   ├── internal
│   │   │   │   ├── admin.py
│   │   │   │   └── __init__.py
│   │   │   ├── main.py
│   │   │   └── routers
│   │   │       ├── __init__.py
│   │   │       ├── items.py
│   │   │       └── users.py
│   │   └── __init__.py
│   ├── body
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004.py
│   │   └── tutorial004_py310.py
│   ├── body_fields
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   └── tutorial001_py310.py
│   ├── body_multiple_params
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003_an.py
│   │   ├── tutorial003_an_py310.py
│   │   ├── tutorial003_an_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004_an.py
│   │   ├── tutorial004_an_py310.py
│   │   ├── tutorial004_an_py39.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial005_an.py
│   │   ├── tutorial005_an_py310.py
│   │   ├── tutorial005_an_py39.py
│   │   ├── tutorial005.py
│   │   └── tutorial005_py310.py
│   ├── body_nested_models
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial002_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial003_py39.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial004_py39.py
│   │   ├── tutorial005.py
│   │   ├── tutorial005_py310.py
│   │   ├── tutorial005_py39.py
│   │   ├── tutorial006.py
│   │   ├── tutorial006_py310.py
│   │   ├── tutorial006_py39.py
│   │   ├── tutorial007.py
│   │   ├── tutorial007_py310.py
│   │   ├── tutorial007_py39.py
│   │   ├── tutorial008.py
│   │   ├── tutorial008_py39.py
│   │   ├── tutorial009.py
│   │   └── tutorial009_py39.py
│   ├── body_updates
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial001_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   └── tutorial002_py39.py
│   ├── conditional_openapi
│   │   └── tutorial001.py
│   ├── configure_swagger_ui
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   └── tutorial003.py
│   ├── cookie_params
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   └── tutorial001_py310.py
│   ├── cors
│   │   └── tutorial001.py
│   ├── custom_docs_ui
│   │   ├── tutorial001.py
│   │   └── tutorial002.py
│   ├── custom_request_and_route
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   └── tutorial003.py
│   ├── custom_response
│   │   ├── tutorial001b.py
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003.py
│   │   ├── tutorial004.py
│   │   ├── tutorial005.py
│   │   ├── tutorial006b.py
│   │   ├── tutorial006c.py
│   │   ├── tutorial006.py
│   │   ├── tutorial007.py
│   │   ├── tutorial008.py
│   │   ├── tutorial009b.py
│   │   ├── tutorial009c.py
│   │   ├── tutorial009.py
│   │   └── tutorial010.py
│   ├── dataclasses
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   └── tutorial003.py
│   ├── debugging
│   │   └── tutorial001.py
│   ├── dependencies
│   │   ├── tutorial001_02_an.py
│   │   ├── tutorial001_02_an_py310.py
│   │   ├── tutorial001_02_an_py39.py
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002_an.py
│   │   ├── tutorial002_an_py310.py
│   │   ├── tutorial002_an_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003_an.py
│   │   ├── tutorial003_an_py310.py
│   │   ├── tutorial003_an_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004_an.py
│   │   ├── tutorial004_an_py310.py
│   │   ├── tutorial004_an_py39.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial005_an.py
│   │   ├── tutorial005_an_py310.py
│   │   ├── tutorial005_an_py39.py
│   │   ├── tutorial005.py
│   │   ├── tutorial005_py310.py
│   │   ├── tutorial006_an.py
│   │   ├── tutorial006_an_py39.py
│   │   ├── tutorial006.py
│   │   ├── tutorial007.py
│   │   ├── tutorial008_an.py
│   │   ├── tutorial008_an_py39.py
│   │   ├── tutorial008b_an.py
│   │   ├── tutorial008b_an_py39.py
│   │   ├── tutorial008b.py
│   │   ├── tutorial008c_an.py
│   │   ├── tutorial008c_an_py39.py
│   │   ├── tutorial008c.py
│   │   ├── tutorial008d_an.py
│   │   ├── tutorial008d_an_py39.py
│   │   ├── tutorial008d.py
│   │   ├── tutorial008.py
│   │   ├── tutorial009.py
│   │   ├── tutorial010.py
│   │   ├── tutorial011_an.py
│   │   ├── tutorial011_an_py39.py
│   │   ├── tutorial011.py
│   │   ├── tutorial012_an.py
│   │   ├── tutorial012_an_py39.py
│   │   └── tutorial012.py
│   ├── dependency_testing
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   └── tutorial001_py310.py
│   ├── encoder
│   │   ├── tutorial001.py
│   │   └── tutorial001_py310.py
│   ├── events
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   └── tutorial003.py
│   ├── extending_openapi
│   │   └── tutorial001.py
│   ├── extra_data_types
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   └── tutorial001_py310.py
│   ├── extra_models
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py39.py
│   │   ├── tutorial005.py
│   │   └── tutorial005_py39.py
│   ├── first_steps
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   └── tutorial003.py
│   ├── generate_clients
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py39.py
│   │   ├── tutorial004.js
│   │   └── tutorial004.py
│   ├── graphql
│   │   └── tutorial001.py
│   ├── handling_errors
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003.py
│   │   ├── tutorial004.py
│   │   ├── tutorial005.py
│   │   └── tutorial006.py
│   ├── header_params
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002_an.py
│   │   ├── tutorial002_an_py310.py
│   │   ├── tutorial002_an_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003_an.py
│   │   ├── tutorial003_an_py310.py
│   │   ├── tutorial003_an_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   └── tutorial003_py39.py
│   ├── metadata
│   │   ├── tutorial001_1.py
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003.py
│   │   └── tutorial004.py
│   ├── middleware
│   │   └── tutorial001.py
│   ├── nosql_databases
│   │   └── tutorial001.py
│   ├── openapi_callbacks
│   │   └── tutorial001.py
│   ├── openapi_webhooks
│   │   └── tutorial001.py
│   ├── path_operation_advanced_configuration
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003.py
│   │   ├── tutorial004.py
│   │   ├── tutorial005.py
│   │   ├── tutorial006.py
│   │   ├── tutorial007_pv1.py
│   │   └── tutorial007.py
│   ├── path_operation_configuration
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial001_py39.py
│   │   ├── tutorial002b.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial002_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial003_py39.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial004_py39.py
│   │   ├── tutorial005.py
│   │   ├── tutorial005_py310.py
│   │   ├── tutorial005_py39.py
│   │   └── tutorial006.py
│   ├── path_params
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003b.py
│   │   ├── tutorial003.py
│   │   ├── tutorial004.py
│   │   └── tutorial005.py
│   ├── path_params_numeric_validations
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py310.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002_an.py
│   │   ├── tutorial002_an_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003_an.py
│   │   ├── tutorial003_an_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial004_an.py
│   │   ├── tutorial004_an_py39.py
│   │   ├── tutorial004.py
│   │   ├── tutorial005_an.py
│   │   ├── tutorial005_an_py39.py
│   │   ├── tutorial005.py
│   │   ├── tutorial006_an.py
│   │   ├── tutorial006_an_py39.py
│   │   └── tutorial006.py
│   ├── python_types
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial003.py
│   │   ├── tutorial004.py
│   │   ├── tutorial005.py
│   │   ├── tutorial006.py
│   │   ├── tutorial006_py39.py
│   │   ├── tutorial007.py
│   │   ├── tutorial007_py39.py
│   │   ├── tutorial008b.py
│   │   ├── tutorial008b_py310.py
│   │   ├── tutorial008.py
│   │   ├── tutorial008_py39.py
│   │   ├── tutorial009b.py
│   │   ├── tutorial009c.py
│   │   ├── tutorial009c_py310.py
│   │   ├── tutorial009.py
│   │   ├── tutorial009_py310.py
│   │   ├── tutorial010.py
│   │   ├── tutorial011.py
│   │   ├── tutorial011_py310.py
│   │   ├── tutorial011_py39.py
│   │   ├── tutorial012.py
│   │   ├── tutorial013.py
│   │   └── tutorial013_py39.py
│   ├── query_params
│   │   ├── tutorial001.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial005.py
│   │   ├── tutorial006b.py
│   │   ├── tutorial006.py
│   │   └── tutorial006_py310.py
│   ├── query_params_str_validations
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002_an.py
│   │   ├── tutorial002_an_py310.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003_an.py
│   │   ├── tutorial003_an_py310.py
│   │   ├── tutorial003_an_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004_an.py
│   │   ├── tutorial004_an_py310.py
│   │   ├── tutorial004_an_py310_regex.py
│   │   ├── tutorial004_an_py39.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial005_an.py
│   │   ├── tutorial005_an_py39.py
│   │   ├── tutorial005.py
│   │   ├── tutorial006_an.py
│   │   ├── tutorial006_an_py39.py
│   │   ├── tutorial006b_an.py
│   │   ├── tutorial006b_an_py39.py
│   │   ├── tutorial006b.py
│   │   ├── tutorial006c_an.py
│   │   ├── tutorial006c_an_py310.py
│   │   ├── tutorial006c_an_py39.py
│   │   ├── tutorial006c.py
│   │   ├── tutorial006c_py310.py
│   │   ├── tutorial006d_an.py
│   │   ├── tutorial006d_an_py39.py
│   │   ├── tutorial006d.py
│   │   ├── tutorial006.py
│   │   ├── tutorial007_an.py
│   │   ├── tutorial007_an_py310.py
│   │   ├── tutorial007_an_py39.py
│   │   ├── tutorial007.py
│   │   ├── tutorial007_py310.py
│   │   ├── tutorial008_an.py
│   │   ├── tutorial008_an_py310.py
│   │   ├── tutorial008_an_py39.py
│   │   ├── tutorial008.py
│   │   ├── tutorial008_py310.py
│   │   ├── tutorial009_an.py
│   │   ├── tutorial009_an_py310.py
│   │   ├── tutorial009_an_py39.py
│   │   ├── tutorial009.py
│   │   ├── tutorial009_py310.py
│   │   ├── tutorial010_an.py
│   │   ├── tutorial010_an_py310.py
│   │   ├── tutorial010_an_py39.py
│   │   ├── tutorial010.py
│   │   ├── tutorial010_py310.py
│   │   ├── tutorial011_an.py
│   │   ├── tutorial011_an_py310.py
│   │   ├── tutorial011_an_py39.py
│   │   ├── tutorial011.py
│   │   ├── tutorial011_py310.py
│   │   ├── tutorial011_py39.py
│   │   ├── tutorial012_an.py
│   │   ├── tutorial012_an_py39.py
│   │   ├── tutorial012.py
│   │   ├── tutorial012_py39.py
│   │   ├── tutorial013_an.py
│   │   ├── tutorial013_an_py39.py
│   │   ├── tutorial013.py
│   │   ├── tutorial014_an.py
│   │   ├── tutorial014_an_py310.py
│   │   ├── tutorial014_an_py39.py
│   │   ├── tutorial014.py
│   │   └── tutorial014_py310.py
│   ├── request_files
│   │   ├── tutorial001_02_an.py
│   │   ├── tutorial001_02_an_py310.py
│   │   ├── tutorial001_02_an_py39.py
│   │   ├── tutorial001_02.py
│   │   ├── tutorial001_02_py310.py
│   │   ├── tutorial001_03_an.py
│   │   ├── tutorial001_03_an_py39.py
│   │   ├── tutorial001_03.py
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   ├── tutorial002_an.py
│   │   ├── tutorial002_an_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py39.py
│   │   ├── tutorial003_an.py
│   │   ├── tutorial003_an_py39.py
│   │   ├── tutorial003.py
│   │   └── tutorial003_py39.py
│   ├── request_form_models
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py39.py
│   │   └── tutorial001.py
│   ├── request_forms
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py39.py
│   │   └── tutorial001.py
│   ├── request_forms_and_files
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py39.py
│   │   └── tutorial001.py
│   ├── response_change_status_code
│   │   └── tutorial001.py
│   ├── response_cookies
│   │   ├── tutorial001.py
│   │   └── tutorial002.py
│   ├── response_directly
│   │   ├── tutorial001.py
│   │   └── tutorial002.py
│   ├── response_headers
│   │   ├── tutorial001.py
│   │   └── tutorial002.py
│   ├── response_model
│   │   ├── tutorial001_01.py
│   │   ├── tutorial001_01_py310.py
│   │   ├── tutorial001_01_py39.py
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial001_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003_01.py
│   │   ├── tutorial003_01_py310.py
│   │   ├── tutorial003_02.py
│   │   ├── tutorial003_03.py
│   │   ├── tutorial003_04.py
│   │   ├── tutorial003_04_py310.py
│   │   ├── tutorial003_05.py
│   │   ├── tutorial003_05_py310.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial004_py39.py
│   │   ├── tutorial005.py
│   │   ├── tutorial005_py310.py
│   │   ├── tutorial006.py
│   │   └── tutorial006_py310.py
│   ├── response_status_code
│   │   ├── tutorial001.py
│   │   └── tutorial002.py
│   ├── schema_extra_example
│   │   ├── tutorial001_pv1.py
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310_pv1.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003_an.py
│   │   ├── tutorial003_an_py310.py
│   │   ├── tutorial003_an_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004_an.py
│   │   ├── tutorial004_an_py310.py
│   │   ├── tutorial004_an_py39.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial005_an.py
│   │   ├── tutorial005_an_py310.py
│   │   ├── tutorial005_an_py39.py
│   │   ├── tutorial005.py
│   │   └── tutorial005_py310.py
│   ├── security
│   │   ├── tutorial001_an.py
│   │   ├── tutorial001_an_py39.py
│   │   ├── tutorial001.py
│   │   ├── tutorial002_an.py
│   │   ├── tutorial002_an_py310.py
│   │   ├── tutorial002_an_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003_an.py
│   │   ├── tutorial003_an_py310.py
│   │   ├── tutorial003_an_py39.py
│   │   ├── tutorial003.py
│   │   ├── tutorial003_py310.py
│   │   ├── tutorial004_an.py
│   │   ├── tutorial004_an_py310.py
│   │   ├── tutorial004_an_py39.py
│   │   ├── tutorial004.py
│   │   ├── tutorial004_py310.py
│   │   ├── tutorial005_an.py
│   │   ├── tutorial005_an_py310.py
│   │   ├── tutorial005_an_py39.py
│   │   ├── tutorial005.py
│   │   ├── tutorial005_py310.py
│   │   ├── tutorial005_py39.py
│   │   ├── tutorial006_an.py
│   │   ├── tutorial006_an_py39.py
│   │   ├── tutorial006.py
│   │   ├── tutorial007_an.py
│   │   ├── tutorial007_an_py39.py
│   │   └── tutorial007.py
│   ├── separate_openapi_schemas
│   │   ├── tutorial001.py
│   │   ├── tutorial001_py310.py
│   │   ├── tutorial001_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   └── tutorial002_py39.py
│   ├── settings
│   │   ├── app01
│   │   │   ├── config.py
│   │   │   ├── __init__.py
│   │   │   └── main.py
│   │   ├── app02
│   │   │   ├── config.py
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   └── test_main.py
│   │   ├── app02_an
│   │   │   ├── config.py
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   └── test_main.py
│   │   ├── app02_an_py39
│   │   │   ├── config.py
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   └── test_main.py
│   │   ├── app03
│   │   │   ├── config.py
│   │   │   ├── __init__.py
│   │   │   └── main.py
│   │   ├── app03_an
│   │   │   ├── config_pv1.py
│   │   │   ├── config.py
│   │   │   ├── __init__.py
│   │   │   └── main.py
│   │   ├── app03_an_py39
│   │   │   ├── config.py
│   │   │   ├── __init__.py
│   │   │   └── main.py
│   │   ├── tutorial001_pv1.py
│   │   └── tutorial001.py
│   ├── sql_databases
│   │   ├── __init__.py
│   │   ├── sql_app
│   │   │   ├── alt_main.py
│   │   │   ├── crud.py
│   │   │   ├── database.py
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   ├── models.py
│   │   │   ├── schemas.py
│   │   │   └── tests
│   │   │       ├── __init__.py
│   │   │       └── test_sql_app.py
│   │   ├── sql_app_py310
│   │   │   ├── alt_main.py
│   │   │   ├── crud.py
│   │   │   ├── database.py
│   │   │   ├── __init__.py
│   │   │   ├── main.py
│   │   │   ├── models.py
│   │   │   ├── schemas.py
│   │   │   └── tests
│   │   │       ├── __init__.py
│   │   │       └── test_sql_app.py
│   │   └── sql_app_py39
│   │       ├── alt_main.py
│   │       ├── crud.py
│   │       ├── database.py
│   │       ├── __init__.py
│   │       ├── main.py
│   │       ├── models.py
│   │       ├── schemas.py
│   │       └── tests
│   │           ├── __init__.py
│   │           └── test_sql_app.py
│   ├── sql_databases_peewee
│   │   └── sql_app
│   │       ├── crud.py
│   │       ├── database.py
│   │       ├── __init__.py
│   │       ├── main.py
│   │       ├── models.py
│   │       └── schemas.py
│   ├── static_files
│   │   └── tutorial001.py
│   ├── sub_applications
│   │   └── tutorial001.py
│   ├── templates
│   │   ├── static
│   │   │   └── styles.css
│   │   ├── templates
│   │   │   └── item.html
│   │   └── tutorial001.py
│   ├── using_request_directly
│   │   └── tutorial001.py
│   ├── websockets
│   │   ├── __init__.py
│   │   ├── tutorial001.py
│   │   ├── tutorial002_an.py
│   │   ├── tutorial002_an_py310.py
│   │   ├── tutorial002_an_py39.py
│   │   ├── tutorial002.py
│   │   ├── tutorial002_py310.py
│   │   ├── tutorial003.py
│   │   └── tutorial003_py39.py
│   └── wsgi
│       └── tutorial001.py
├── fastapi
│   ├── applications.py
│   ├── background.py
│   ├── cli.py
│   ├── _compat.py
│   ├── concurrency.py
│   ├── datastructures.py
│   ├── dependencies
│   │   ├── __init__.py
│   │   ├── models.py
│   │   └── utils.py
│   ├── encoders.py
│   ├── exception_handlers.py
│   ├── exceptions.py
│   ├── __init__.py
│   ├── logger.py
│   ├── __main__.py
│   ├── middleware
│   │   ├── cors.py
│   │   ├── gzip.py
│   │   ├── httpsredirect.py
│   │   ├── __init__.py
│   │   ├── trustedhost.py
│   │   └── wsgi.py
│   ├── openapi
│   │   ├── constants.py
│   │   ├── docs.py
│   │   ├── __init__.py
│   │   ├── models.py
│   │   └── utils.py
│   ├── param_functions.py
│   ├── params.py
│   ├── py.typed
│   ├── requests.py
│   ├── responses.py
│   ├── routing.py
│   ├── security
│   │   ├── api_key.py
│   │   ├── base.py
│   │   ├── http.py
│   │   ├── __init__.py
│   │   ├── oauth2.py
│   │   ├── open_id_connect_url.py
│   │   └── utils.py
│   ├── staticfiles.py
│   ├── templating.py
│   ├── testclient.py
│   ├── types.py
│   ├── utils.py
│   └── websockets.py
├── LICENSE
├── pdm_build.py
├── pyproject.toml
├── README.md
├── requirements-docs-insiders.txt
├── requirements-docs-tests.txt
├── requirements-docs.txt
├── requirements-github-actions.txt
├── requirements-tests.txt
├── requirements.txt
├── scripts
│   ├── deploy_docs_status.py
│   ├── docs.py
│   ├── format.sh
│   ├── lint.sh
│   ├── mkdocs_hooks.py
│   ├── playwright
│   │   ├── request_form_models
│   │   │   └── image01.py
│   │   └── separate_openapi_schemas
│   │       ├── image01.py
│   │       ├── image02.py
│   │       ├── image03.py
│   │       ├── image04.py
│   │       └── image05.py
│   ├── test-cov-html.sh
│   └── test.sh
├── SECURITY.md
└── tests
    ├── __init__.py
    ├── main.py
    ├── test_additional_properties_bool.py
    ├── test_additional_properties.py
    ├── test_additional_response_extra.py
    ├── test_additional_responses_bad.py
    ├── test_additional_responses_custom_model_in_callback.py
    ├── test_additional_responses_custom_validationerror.py
    ├── test_additional_responses_default_validationerror.py
    ├── test_additional_responses_response_class.py
    ├── test_additional_responses_router.py
    ├── test_allow_inf_nan_in_enforcing.py
    ├── test_ambiguous_params.py
    ├── test_annotated.py
    ├── test_application.py
    ├── test_callable_endpoint.py
    ├── test_compat.py
    ├── test_computed_fields.py
    ├── test_custom_middleware_exception.py
    ├── test_custom_route_class.py
    ├── test_custom_schema_fields.py
    ├── test_custom_swagger_ui_redirect.py
    ├── test_datastructures.py
    ├── test_datetime_custom_encoder.py
    ├── test_default_response_class.py
    ├── test_default_response_class_router.py
    ├── test_dependency_cache.py
    ├── test_dependency_class.py
    ├── test_dependency_contextmanager.py
    ├── test_dependency_contextvars.py
    ├── test_dependency_duplicates.py
    ├── test_dependency_normal_exceptions.py
    ├── test_dependency_overrides.py
    ├── test_dependency_security_overrides.py
    ├── test_deprecated_openapi_prefix.py
    ├── test_duplicate_models_openapi.py
    ├── test_empty_router.py
    ├── test_enforce_once_required_parameter.py
    ├── test_exception_handlers.py
    ├── test_extra_routes.py
    ├── test_fastapi_cli.py
    ├── test_filter_pydantic_sub_model
    │   ├── app_pv1.py
    │   ├── __init__.py
    │   └── test_filter_pydantic_sub_model_pv1.py
    ├── test_filter_pydantic_sub_model_pv2.py
    ├── test_forms_from_non_typing_sequences.py
    ├── test_forms_single_model.py
    ├── test_forms_single_param.py
    ├── test_generate_unique_id_function.py
    ├── test_generic_parameterless_depends.py
    ├── test_get_request_body.py
    ├── test_http_connection_injection.py
    ├── test_include_route.py
    ├── test_include_router_defaults_overrides.py
    ├── test_infer_param_optionality.py
    ├── test_inherited_custom_class.py
    ├── test_invalid_path_param.py
    ├── test_invalid_sequence_param.py
    ├── test_jsonable_encoder.py
    ├── test_local_docs.py
    ├── test_modules_same_name_body
    │   ├── app
    │   │   ├── a.py
    │   │   ├── b.py
    │   │   ├── __init__.py
    │   │   └── main.py
    │   ├── __init__.py
    │   └── test_main.py
    ├── test_multi_body_errors.py
    ├── test_multipart_installation.py
    ├── test_multi_query_errors.py
    ├── test_no_swagger_ui_redirect.py
    ├── test_openapi_examples.py
    ├── test_openapi_query_parameter_extension.py
    ├── test_openapi_route_extensions.py
    ├── test_openapi_separate_input_output_schemas.py
    ├── test_openapi_servers.py
    ├── test_operations_signatures.py
    ├── test_orjson_response_class.py
    ├── test_param_class.py
    ├── test_param_include_in_schema.py
    ├── test_param_in_path_and_dependency.py
    ├── test_params_repr.py
    ├── test_path.py
    ├── test_put_no_body.py
    ├── test_query.py
    ├── test_read_with_orm_mode.py
    ├── test_regex_deprecated_body.py
    ├── test_regex_deprecated_params.py
    ├── test_repeated_cookie_headers.py
    ├── test_repeated_dependency_schema.py
    ├── test_repeated_parameter_alias.py
    ├── test_reponse_set_reponse_code_empty.py
    ├── test_request_body_parameters_media_type.py
    ├── test_required_noneable.py
    ├── test_response_by_alias.py
    ├── test_response_change_status_code.py
    ├── test_response_class_no_mediatype.py
    ├── test_response_code_no_body.py
    ├── test_response_model_as_return_annotation.py
    ├── test_response_model_data_filter_no_inheritance.py
    ├── test_response_model_data_filter.py
    ├── test_response_model_include_exclude.py
    ├── test_response_model_invalid.py
    ├── test_response_model_sub_types.py
    ├── test_router_events.py
    ├── test_router_prefix_with_template.py
    ├── test_router_redirect_slashes.py
    ├── test_route_scope.py
    ├── test_schema_extra_examples.py
    ├── test_security_api_key_cookie_description.py
    ├── test_security_api_key_cookie_optional.py
    ├── test_security_api_key_cookie.py
    ├── test_security_api_key_header_description.py
    ├── test_security_api_key_header_optional.py
    ├── test_security_api_key_header.py
    ├── test_security_api_key_query_description.py
    ├── test_security_api_key_query_optional.py
    ├── test_security_api_key_query.py
    ├── test_security_http_base_description.py
    ├── test_security_http_base_optional.py
    ├── test_security_http_base.py
    ├── test_security_http_basic_optional.py
    ├── test_security_http_basic_realm_description.py
    ├── test_security_http_basic_realm.py
    ├── test_security_http_bearer_description.py
    ├── test_security_http_bearer_optional.py
    ├── test_security_http_bearer.py
    ├── test_security_http_digest_description.py
    ├── test_security_http_digest_optional.py
    ├── test_security_http_digest.py
    ├── test_security_oauth2_authorization_code_bearer_description.py
    ├── test_security_oauth2_authorization_code_bearer.py
    ├── test_security_oauth2_optional_description.py
    ├── test_security_oauth2_optional.py
    ├── test_security_oauth2_password_bearer_optional_description.py
    ├── test_security_oauth2_password_bearer_optional.py
    ├── test_security_oauth2.py
    ├── test_security_openid_connect_description.py
    ├── test_security_openid_connect_optional.py
    ├── test_security_openid_connect.py
    ├── test_serialize_response_dataclass.py
    ├── test_serialize_response_model.py
    ├── test_serialize_response.py
    ├── test_skip_defaults.py
    ├── test_starlette_exception.py
    ├── test_starlette_urlconvertors.py
    ├── test_sub_callbacks.py
    ├── test_swagger_ui_init_oauth.py
    ├── test_tuples.py
    ├── test_tutorial
    │   ├── __init__.py
    │   ├── test_additional_responses
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   ├── test_tutorial003.py
    │   │   └── test_tutorial004.py
    │   ├── test_additional_status_codes
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py310.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial001_py310.py
    │   ├── test_advanced_middleware
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   └── test_tutorial003.py
    │   ├── test_async_sql_databases
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_async_tests
    │   │   ├── __init__.py
    │   │   └── test_main.py
    │   ├── test_background_tasks
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002_an.py
    │   │   ├── test_tutorial002_an_py310.py
    │   │   ├── test_tutorial002_an_py39.py
    │   │   ├── test_tutorial002.py
    │   │   └── test_tutorial002_py310.py
    │   ├── test_behind_a_proxy
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   ├── test_tutorial003.py
    │   │   └── test_tutorial004.py
    │   ├── test_bigger_applications
    │   │   ├── __init__.py
    │   │   ├── test_main_an.py
    │   │   ├── test_main_an_py39.py
    │   │   └── test_main.py
    │   ├── test_body
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial001_py310.py
    │   ├── test_body_fields
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py310.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial001_py310.py
    │   ├── test_body_multiple_params
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py310.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial001_py310.py
    │   │   ├── test_tutorial003_an.py
    │   │   ├── test_tutorial003_an_py310.py
    │   │   ├── test_tutorial003_an_py39.py
    │   │   ├── test_tutorial003.py
    │   │   └── test_tutorial003_py310.py
    │   ├── test_body_nested_models
    │   │   ├── __init__.py
    │   │   ├── test_tutorial009.py
    │   │   └── test_tutorial009_py39.py
    │   ├── test_body_updates
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial001_py310.py
    │   │   └── test_tutorial001_py39.py
    │   ├── test_conditional_openapi
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_configure_swagger_ui
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   └── test_tutorial003.py
    │   ├── test_cookie_params
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py310.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial001_py310.py
    │   ├── test_cors
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_custom_docs_ui
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial002.py
    │   ├── test_custom_request_and_route
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   └── test_tutorial003.py
    │   ├── test_custom_response
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001b.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial004.py
    │   │   ├── test_tutorial005.py
    │   │   ├── test_tutorial006b.py
    │   │   ├── test_tutorial006c.py
    │   │   ├── test_tutorial006.py
    │   │   ├── test_tutorial007.py
    │   │   ├── test_tutorial008.py
    │   │   ├── test_tutorial009b.py
    │   │   ├── test_tutorial009c.py
    │   │   └── test_tutorial009.py
    │   ├── test_dataclasses
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   └── test_tutorial003.py
    │   ├── test_dependencies
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py310.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial001_py310.py
    │   │   ├── test_tutorial004_an.py
    │   │   ├── test_tutorial004_an_py310.py
    │   │   ├── test_tutorial004_an_py39.py
    │   │   ├── test_tutorial004.py
    │   │   ├── test_tutorial004_py310.py
    │   │   ├── test_tutorial006_an.py
    │   │   ├── test_tutorial006_an_py39.py
    │   │   ├── test_tutorial006.py
    │   │   ├── test_tutorial008b_an.py
    │   │   ├── test_tutorial008b_an_py39.py
    │   │   ├── test_tutorial008b.py
    │   │   ├── test_tutorial008c_an.py
    │   │   ├── test_tutorial008c_an_py39.py
    │   │   ├── test_tutorial008c.py
    │   │   ├── test_tutorial008d_an.py
    │   │   ├── test_tutorial008d_an_py39.py
    │   │   ├── test_tutorial008d.py
    │   │   ├── test_tutorial012_an.py
    │   │   ├── test_tutorial012_an_py39.py
    │   │   └── test_tutorial012.py
    │   ├── test_events
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   └── test_tutorial003.py
    │   ├── test_extending_openapi
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_extra_data_types
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py310.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial001_py310.py
    │   ├── test_extra_models
    │   │   ├── __init__.py
    │   │   ├── test_tutorial003.py
    │   │   ├── test_tutorial003_py310.py
    │   │   ├── test_tutorial004.py
    │   │   ├── test_tutorial004_py39.py
    │   │   ├── test_tutorial005.py
    │   │   └── test_tutorial005_py39.py
    │   ├── test_first_steps
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_generate_clients
    │   │   ├── __init__.py
    │   │   └── test_tutorial003.py
    │   ├── test_handling_errors
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   ├── test_tutorial003.py
    │   │   ├── test_tutorial004.py
    │   │   ├── test_tutorial005.py
    │   │   └── test_tutorial006.py
    │   ├── test_header_params
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py310.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial001_py310.py
    │   │   ├── test_tutorial002_an.py
    │   │   ├── test_tutorial002_an_py310.py
    │   │   ├── test_tutorial002_an_py39.py
    │   │   ├── test_tutorial002.py
    │   │   ├── test_tutorial002_py310.py
    │   │   ├── test_tutorial003_an.py
    │   │   ├── test_tutorial003_an_py310.py
    │   │   ├── test_tutorial003_an_py39.py
    │   │   ├── test_tutorial003.py
    │   │   └── test_tutorial003_py310.py
    │   ├── test_metadata
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_1.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial004.py
    │   ├── test_openapi_callbacks
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_openapi_webhooks
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_path_operation_advanced_configurations
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   ├── test_tutorial003.py
    │   │   ├── test_tutorial004.py
    │   │   ├── test_tutorial005.py
    │   │   ├── test_tutorial006.py
    │   │   ├── test_tutorial007_pv1.py
    │   │   └── test_tutorial007.py
    │   ├── test_path_operation_configurations
    │   │   ├── __init__.py
    │   │   ├── test_tutorial002b.py
    │   │   ├── test_tutorial005.py
    │   │   ├── test_tutorial005_py310.py
    │   │   ├── test_tutorial005_py39.py
    │   │   └── test_tutorial006.py
    │   ├── test_path_params
    │   │   ├── __init__.py
    │   │   ├── test_tutorial004.py
    │   │   └── test_tutorial005.py
    │   ├── test_query_params
    │   │   ├── __init__.py
    │   │   ├── test_tutorial005.py
    │   │   ├── test_tutorial006.py
    │   │   └── test_tutorial006_py310.py
    │   ├── test_query_params_str_validations
    │   │   ├── __init__.py
    │   │   ├── test_tutorial010_an.py
    │   │   ├── test_tutorial010_an_py310.py
    │   │   ├── test_tutorial010_an_py39.py
    │   │   ├── test_tutorial010.py
    │   │   ├── test_tutorial010_py310.py
    │   │   ├── test_tutorial011_an.py
    │   │   ├── test_tutorial011_an_py310.py
    │   │   ├── test_tutorial011_an_py39.py
    │   │   ├── test_tutorial011.py
    │   │   ├── test_tutorial011_py310.py
    │   │   ├── test_tutorial011_py39.py
    │   │   ├── test_tutorial012_an.py
    │   │   ├── test_tutorial012_an_py39.py
    │   │   ├── test_tutorial012.py
    │   │   ├── test_tutorial012_py39.py
    │   │   ├── test_tutorial013_an.py
    │   │   ├── test_tutorial013_an_py39.py
    │   │   ├── test_tutorial013.py
    │   │   ├── test_tutorial014_an.py
    │   │   ├── test_tutorial014_an_py310.py
    │   │   ├── test_tutorial014_an_py39.py
    │   │   ├── test_tutorial014.py
    │   │   └── test_tutorial014_py310.py
    │   ├── test_request_files
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_02_an.py
    │   │   ├── test_tutorial001_02_an_py310.py
    │   │   ├── test_tutorial001_02_an_py39.py
    │   │   ├── test_tutorial001_02.py
    │   │   ├── test_tutorial001_02_py310.py
    │   │   ├── test_tutorial001_03_an.py
    │   │   ├── test_tutorial001_03_an_py39.py
    │   │   ├── test_tutorial001_03.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002_an.py
    │   │   ├── test_tutorial002_an_py39.py
    │   │   ├── test_tutorial002.py
    │   │   ├── test_tutorial002_py39.py
    │   │   ├── test_tutorial003_an.py
    │   │   ├── test_tutorial003_an_py39.py
    │   │   ├── test_tutorial003.py
    │   │   └── test_tutorial003_py39.py
    │   ├── test_request_form_models
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   └── test_tutorial001.py
    │   ├── test_request_forms
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   └── test_tutorial001.py
    │   ├── test_request_forms_and_files
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   └── test_tutorial001.py
    │   ├── test_response_change_status_code
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_response_cookies
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial002.py
    │   ├── test_response_headers
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial002.py
    │   ├── test_response_model
    │   │   ├── __init__.py
    │   │   ├── test_tutorial003_01.py
    │   │   ├── test_tutorial003_01_py310.py
    │   │   ├── test_tutorial003_02.py
    │   │   ├── test_tutorial003_03.py
    │   │   ├── test_tutorial003_04.py
    │   │   ├── test_tutorial003_04_py310.py
    │   │   ├── test_tutorial003_05.py
    │   │   ├── test_tutorial003_05_py310.py
    │   │   ├── test_tutorial003.py
    │   │   ├── test_tutorial003_py310.py
    │   │   ├── test_tutorial004.py
    │   │   ├── test_tutorial004_py310.py
    │   │   ├── test_tutorial004_py39.py
    │   │   ├── test_tutorial005.py
    │   │   ├── test_tutorial005_py310.py
    │   │   ├── test_tutorial006.py
    │   │   └── test_tutorial006_py310.py
    │   ├── test_schema_extra_example
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_pv1.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial001_py310_pv1.py
    │   │   ├── test_tutorial001_py310.py
    │   │   ├── test_tutorial004_an.py
    │   │   ├── test_tutorial004_an_py310.py
    │   │   ├── test_tutorial004_an_py39.py
    │   │   ├── test_tutorial004.py
    │   │   ├── test_tutorial004_py310.py
    │   │   ├── test_tutorial005_an.py
    │   │   ├── test_tutorial005_an_py310.py
    │   │   ├── test_tutorial005_an_py39.py
    │   │   ├── test_tutorial005.py
    │   │   └── test_tutorial005_py310.py
    │   ├── test_security
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial003_an.py
    │   │   ├── test_tutorial003_an_py310.py
    │   │   ├── test_tutorial003_an_py39.py
    │   │   ├── test_tutorial003.py
    │   │   ├── test_tutorial003_py310.py
    │   │   ├── test_tutorial005_an.py
    │   │   ├── test_tutorial005_an_py310.py
    │   │   ├── test_tutorial005_an_py39.py
    │   │   ├── test_tutorial005.py
    │   │   ├── test_tutorial005_py310.py
    │   │   ├── test_tutorial005_py39.py
    │   │   ├── test_tutorial006_an.py
    │   │   ├── test_tutorial006_an_py39.py
    │   │   └── test_tutorial006.py
    │   ├── test_separate_openapi_schemas
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial001_py310.py
    │   │   ├── test_tutorial001_py39.py
    │   │   ├── test_tutorial002.py
    │   │   ├── test_tutorial002_py310.py
    │   │   └── test_tutorial002_py39.py
    │   ├── test_settings
    │   │   ├── __init__.py
    │   │   ├── test_app02.py
    │   │   ├── test_tutorial001_pv1.py
    │   │   └── test_tutorial001.py
    │   ├── test_sql_databases
    │   │   ├── __init__.py
    │   │   ├── test_sql_databases_middleware.py
    │   │   ├── test_sql_databases_middleware_py310.py
    │   │   ├── test_sql_databases_middleware_py39.py
    │   │   ├── test_sql_databases.py
    │   │   ├── test_sql_databases_py310.py
    │   │   ├── test_sql_databases_py39.py
    │   │   ├── test_testing_databases.py
    │   │   ├── test_testing_databases_py310.py
    │   │   └── test_testing_databases_py39.py
    │   ├── test_sub_applications
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_templates
    │   │   ├── __init__.py
    │   │   └── test_tutorial001.py
    │   ├── test_testing
    │   │   ├── __init__.py
    │   │   ├── test_main_b_an.py
    │   │   ├── test_main_b_an_py310.py
    │   │   ├── test_main_b_an_py39.py
    │   │   ├── test_main_b.py
    │   │   ├── test_main_b_py310.py
    │   │   ├── test_main.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002.py
    │   │   └── test_tutorial003.py
    │   ├── test_testing_dependencies
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001_an.py
    │   │   ├── test_tutorial001_an_py310.py
    │   │   ├── test_tutorial001_an_py39.py
    │   │   ├── test_tutorial001.py
    │   │   └── test_tutorial001_py310.py
    │   ├── test_websockets
    │   │   ├── __init__.py
    │   │   ├── test_tutorial001.py
    │   │   ├── test_tutorial002_an.py
    │   │   ├── test_tutorial002_an_py310.py
    │   │   ├── test_tutorial002_an_py39.py
    │   │   ├── test_tutorial002.py
    │   │   ├── test_tutorial002_py310.py
    │   │   ├── test_tutorial003.py
    │   │   └── test_tutorial003_py39.py
    │   └── test_wsgi
    │       ├── __init__.py
    │       └── test_tutorial001.py
    ├── test_typing_python39.py
    ├── test_union_body.py
    ├── test_union_inherited_body.py
    ├── test_validate_response_dataclass.py
    ├── test_validate_response.py
    ├── test_validate_response_recursive
    │   ├── app_pv1.py
    │   ├── app_pv2.py
    │   ├── __init__.py
    │   ├── test_validate_response_recursive_pv1.py
    │   └── test_validate_response_recursive_pv2.py
    ├── test_webhooks_security.py
    ├── test_ws_dependencies.py
    ├── test_ws_router.py
    └── utils.py
```
