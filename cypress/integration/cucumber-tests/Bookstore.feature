Feature: Test CRUD methods in Sample REST API testing framework

    Scenario: POST post example
        When I send a POST HTTP request
        Then I receive valid HTTP response code 201