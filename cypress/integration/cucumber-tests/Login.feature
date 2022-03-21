Feature: Login

    Login to application

    Background: Login Page is opened
        Given The Login Page is opened

    @smoke @loginsuccess
    Scenario: Valid credentials should allow user to login
        Given Valid username 'binhle0106@gmail.com' and password 'Testing@123' are entered
        When Submit button is clicked
        Then The text 'wrong test' is displayed

    @smoke
    Scenario: Invalid credentials should not allow user to login using dataTable
        Given Invalid username and password are entered and click submit
            | username     | password  | error                        |
            | binh1@hn.net | wrongpass | email or password is invalid |
            | binh2@hn.net | wrongpass | email or password is invalid |

    @regression @loginfail
    Scenario Outline: Invalid credentials should not allow user to login using Examples
        Given Invalid "<username>" and "<password>" are entered
        When Submit button is clicked
        Then An error message 'email or password is invalid' is displayed

        Examples:
            | username     | password   |
            | binh3@hn.net | wrongpass  |
            | binh4@hn.net | wrongpass2 |

