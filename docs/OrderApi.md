# TempApi.OrderApi

All URIs are relative to *https://83.212.100.226:6001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createorder**](OrderApi.md#createorder) | **POST** /order | Creates the data
[**deleteorder**](OrderApi.md#deleteorder) | **DELETE** /order/{orderId} | Delete the element
[**getAllorder**](OrderApi.md#getAllorder) | **GET** /order/getAll | Get all the data
[**getByParamsorder**](OrderApi.md#getByParamsorder) | **GET** /order/getByParams | Get all the data based on user query
[**getorder**](OrderApi.md#getorder) | **GET** /order/{orderId} | Get the element
[**updateorder**](OrderApi.md#updateorder) | **PUT** /order/{orderId} | Updates the element



## createorder

> Order createorder(order)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OrderApi();
let order = new TempApi.Order(); // Order | data to be created
apiInstance.createorder(order, (error, data, response) => {
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
 **order** | [**Order**](Order.md)| data to be created | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteorder

> deleteorder(orderId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OrderApi();
let orderId = "orderId_example"; // String | the Id parameter
apiInstance.deleteorder(orderId, (error, data, response) => {
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
 **orderId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllorder

> [Order] getAllorder()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OrderApi();
apiInstance.getAllorder((error, data, response) => {
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

[**[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsorder

> [Order] getByParamsorder(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OrderApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsorder(filter, (error, data, response) => {
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

[**[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getorder

> Order getorder(orderId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OrderApi();
let orderId = "orderId_example"; // String | the Id parameter
apiInstance.getorder(orderId, (error, data, response) => {
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
 **orderId** | **String**| the Id parameter | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateorder

> Order updateorder(orderId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OrderApi();
let orderId = "orderId_example"; // String | the Id parameter
let opts = {
  'order': new TempApi.Order() // Order | data to be updated
};
apiInstance.updateorder(orderId, opts, (error, data, response) => {
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
 **orderId** | **String**| the Id parameter | 
 **order** | [**Order**](Order.md)| data to be updated | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

