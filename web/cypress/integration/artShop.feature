Feature: Paintings Page
      Background: Go to the Paintings page
            Given I am on the paintings page

      Scenario: I can see the single painting item
            Then I see 'The Lonely Boat'

      Scenario: I can see a list of paintings
            Then display the following names of the paintings
                  | name                       |
                  | The Lonely Boat            |
                  | Peacock                    |
                  | Silhouette house           |
                  | Black bird perched on tree |