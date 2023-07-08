const contacts = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const readContacts = await contacts.listContacts();
      console.log("Contacts:", readContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log("Contact by ID: ", oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log("New contact:", newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log("Removed contact: ", removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
