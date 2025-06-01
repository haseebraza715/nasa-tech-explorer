# NASA TechTransfer API

The NASA TechTransfer API provides programmatic access to NASA’s portfolio of patents, software technologies. These resources are made available to support innovation, commercialization, and public benefit by enabling developers, researchers, and organizations to search and reuse NASA-developed technologies.

## Base URL

```

[https://api.nasa.gov/techtransfer](https://api.nasa.gov/techtransfer)

```

> All endpoints require an API key. You can use `DEMO_KEY` for testing or request a personal key at [api.nasa.gov](https://api.nasa.gov/).

## Available Endpoints

| Resource     | Endpoint                          | Query Parameter   | Description                                                   |
|--------------|-----------------------------------|-------------------|---------------------------------------------------------------|
| Patents      | `/patent/?patent={keyword}`       | `patent`          | Searches for patents by keyword                               |
| Patent Issued| `/patent/?patent_issued={year}`   | `patent_issued`   | Filters patents by issuance details (e.g., year)              |
| Software     | `/software/?software={keyword}`   | `software`        | Searches NASA-developed software tools and platforms          |

## Example Request

Search for patents related to "engine":

```

GET [https://api.nasa.gov/techtransfer/patent/?patent=engine\&api\_key=DEMO\_KEY](https://api.nasa.gov/techtransfer/patent/?patent=engine&api_key=DEMO_KEY)

````

### Example Response (truncated):

```json
{
  "results": [
    [
      "MSC-25644-1",
      "Multifuel Capable Engine with Low NOx Emissions",
      "A multifuel internal combustion engine system that reduces nitrogen oxide emissions...",
      ...
    ]
  ]
}
````

## How to Use

1. **Obtain an API key** from [https://api.nasa.gov](https://api.nasa.gov)
2. **Choose an endpoint** based on your use case
3. **Add query parameters** such as keywords or dates
4. **Append your API key** to the request URL
5. **Make a GET request** to retrieve JSON-formatted results

## Use Cases

* Educational and research tools for exploring NASA innovations
* Commercial and academic analysis of available technologies
* Integration into applications for public awareness or industry usage

## Additional Resources

* [technology.nasa.gov](https://technology.nasa.gov): NASA Patent Licensing
* [software.nasa.gov](https://software.nasa.gov): Open Source NASA Software

## License and Usage

The API and data are public and free to use. Attribution to NASA is appreciated where applicable.
