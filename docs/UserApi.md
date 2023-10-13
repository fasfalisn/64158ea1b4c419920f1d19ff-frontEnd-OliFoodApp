# TempApi.UserApi

All URIs are relative to *https://83.212.100.226:6001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createuser**](UserApi.md#createuser) | **POST** /user | Creates the data
[**deleteuser**](UserApi.md#deleteuser) | **DELETE** /user/{userId} | Delete the element
[**getAlluser**](UserApi.md#getAlluser) | **GET** /user/getAll | Get all the data
[**getByParamsuser**](UserApi.md#getByParamsuser) | **GET** /user/getByParams | Get all the data based on user query
[**getuser**](UserApi.md#getuser) | **GET** /user/{userId} | Get the element
[**updateuser**](UserApi.md#updateuser) | **PUT** /user/{userId} | Updates the element



## createuser

> User createuser(user)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UserApi();
let user = new TempApi.User(); // User | data to be created
apiInstance.createuser(user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| data to be created | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteuser

> deleteuser(userId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UserApi();
let userId = "userId_example"; // String | the Id parameter
apiInstance.deleteuser(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlluser

> [User] getAlluser()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UserApi();
apiInstance.getAlluser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsuser

> [User] getByParamsuser(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UserApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsuser(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getuser

> User getuser(userId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UserApi();
let userId = "userId_example"; // String | the Id parameter
apiInstance.getuser(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| the Id parameter | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateuser

> User updateuser(userId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UserApi();
let userId = "userId_example"; // String | the Id parameter
let opts = {
  'user': new TempApi.User() // User | data to be updated
};
apiInstance.updateuser(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| the Id parameter | 
 **user** | [**User**](User.md)| data to be updated | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

