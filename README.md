# Express Vehicle Parking Manager API

This is a simple API for managing vehicle parking in a parking lot. The API allows you to add, view, update, and delete vehicles from the parking system.

## Main Route

All vehicle-related operations are accessible under the `/api/v1/vehicles` endpoint.

```bash
/app.use("/api/v1/vehicles", vehicles);
```

## Routes

### `GET /api/v1/vehicles` - Get All Vehicles

Retrieves a list of all vehicles currently parked in the parking lot.

**Response:**

- **Status**: 200 OK
- **Body**:

```json
{
  "allVehicles": [
    {
      "vehicleDetail": "ABC123",
      "checkedIn": true,
      "checkedInDateTime": "2025-02-10T10:00:00.000Z",
      "checkedOutDateTime": null
    },
    {
      "vehicleDetail": "XYZ456",
      "checkedIn": false,
      "checkedInDateTime": "2025-02-01T08:00:00.000Z",
      "checkedOutDateTime": "2025-02-05T16:30:00.000Z"
    }
  ]
}
```

**Error Response:**

- **Status**: 500 Internal Server Error
- **Body**:

```json
{
  "error": "Error message"
}
```

---

### `POST /api/v1/vehicles` - Add a Vehicle

Adds a new vehicle to the parking lot.

**Request Body:**

```json
{
  "vehicleDetail": "ABC123",
  "checkedIn": true,
  "checkedInDateTime": "2025-02-10T10:00:00.000Z"
}
```

**Response:**

- **Status**: 201 Created
- **Body**:

```json
{
  "vehicle": {
    "vehicleDetail": "ABC123",
    "checkedIn": true,
    "checkedInDateTime": "2025-02-10T10:00:00.000Z",
    "checkedOutDateTime": null
  }
}
```

**Error Response:**

- **Status**: 500 Internal Server Error
- **Body**:

```json
{
  "msg": "Error message"
}
```

---

### `GET /api/v1/vehicles/:id` - Get Vehicle by ID

Retrieves details of a specific vehicle by its `vehicleDetail` (ID).

**Response:**

- **Status**: 200 OK
- **Body**:

```json
{
  "result": {
    "vehicleDetail": "ABC123",
    "checkedIn": true,
    "checkedInDateTime": "2025-02-10T10:00:00.000Z",
    "checkedOutDateTime": null
  }
}
```

**Error Responses:**

- **Status**: 404 Not Found
- **Body**:

```json
{
  "msg": "No records found for vehicle detail: ABC123"
}
```

- **Status**: 500 Internal Server Error
- **Body**:

```json
{
  "error": "Error message"
}
```

---

### `PATCH /api/v1/vehicles/:id` - Update Vehicle Details

Updates details of an existing vehicle by its `vehicleDetail` (ID).

**Request Body:**

```json
{
  "checkedIn": false,
  "checkedOutDateTime": "2025-02-05T16:30:00.000Z"
}
```

**Response:**

- **Status**: 200 OK
- **Body**:

```json
{
  "vehicleDetail": {
    "vehicleDetail": "ABC123",
    "checkedIn": false,
    "checkedInDateTime": "2025-02-10T10:00:00.000Z",
    "checkedOutDateTime": "2025-02-05T16:30:00.000Z"
  }
}
```

**Error Responses:**

- **Status**: 404 Not Found
- **Body**:

```json
{
  "msg": "No records found for vehicle detail: ABC123"
}
```

- **Status**: 500 Internal Server Error
- **Body**:

```json
{
  "msg": "Error message"
}
```

---

### `DELETE /api/v1/vehicles/:id` - Delete Vehicle by ID

Deletes a vehicle from the parking lot by its `vehicleDetail` (ID).

**Response:**

- **Status**: 200 OK
- **Body**:

```json
{
  "vehicleDetail": {
    "vehicleDetail": "ABC123",
    "checkedIn": true,
    "checkedInDateTime": "2025-02-10T10:00:00.000Z",
    "checkedOutDateTime": null
  }
}
```

**Error Responses:**

- **Status**: 404 Not Found
- **Body**:

```json
{
  "msg": "No records found for vehicle detail: ABC123"
}
```

- **Status**: 500 Internal Server Error
- **Body**:

```json
{
  "msg": "Error message"
}
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

By default, the API will be running on `http://localhost:3001`.

## License

This project is licensed under the MIT License.

---
