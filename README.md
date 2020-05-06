CLONING
-------

* Go to the repository and click on the *Clone or download* button.
* Copy the link from there.
* In your device, locate to the folder you want to clone the repo to.
* Open terminal and run the command `git clone` followed by the copied link of the repo and the files will be cloned to your device.


INSTALLATION
------------

* Run the `npm install` command once the repository has been cloned locally to your device. This will install all the necessary node modules for this project.


RUNNING THE PROJECT
-------------------

* Once the node modules are installed, go inside the cloned folder by `cd RChat`.
* Hence, to start the project, run the command `npm run dev` where, *dev* is a script which runs the client as well as the server concurrently.
* Open your browser and go to *http://localhost:3000* and you will see a register page. There you can register by a username you want.
* Open another tab and go to the same link as above and register as another user. You could also use another device connected on the same network as the device which runs the `run` command and go to your IP address, followed by port number i.e. 3000 `192.168.1.1:3000`.
* Now, the two users can communicate to each other.