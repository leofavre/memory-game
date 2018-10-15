# Memory Game

### A memory game app with GitHub cards and web components.

## Game loop

#### Fetch cards

* Waits for user to selected a GitHub username.

* Disallows interaction.

* Fetches names and pictures of users related to that account.

  * Fetch ok?

    * Saves cards.

    * Sends success message.

  * Fetch error?

    * Sends faillure message.

    * Allows interaction.
  
    * Goes back to **Fetch cards**.

#### Mount board

* Distribute cards.

#### Play game

* Waits for user to choose a card.

* Disallows interaction.

* Validates user choice:

  * Valid?

    * Updates board accordingly.

    * Sends success message.

  * Invalid?

    * Sends faillure message.

* Verify if the game has finished:

  * Finished?

    * Updates board accordingly.

    * Sends success message.

    * Goes to **End game**.

* Allows interaction.

* Goes back to **Play game**.

#### End game

* Shows "Start again" and "About" buttons.
