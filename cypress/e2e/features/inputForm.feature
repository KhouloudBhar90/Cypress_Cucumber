Feature: Reussire la création d'un formulaire

Scenario: Création d'un formulaire avec les champs obligatoires
Given Je charge mon application 
And Je suis sur la page formulaire
When Je renseigne les champs obligatoires
When Je clique sur le bouton "Submit"
Then Je visualise le message "Thanks for contacting us! We will be in touch with you shortly."
Then Je visualise le fond vert avec ce message

   