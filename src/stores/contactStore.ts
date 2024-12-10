import { create } from 'zustand';
import { Contact, dummyContacts } from '../data/contacts';

type ContactStore = {
  contacts: Contact[];
  addContact: (newContact: Contact) => void;
  findContact: (id: number) => Contact | undefined;
  updateContact: (id: number, newContact: Contact) => void;
};

const useContactStore = create<ContactStore>((set, get) => ({
  contacts: dummyContacts,

  addContact: (newContact: Contact) => {
    set((state) => ({
      contacts: [...state.contacts, newContact],
    }));
  },

  findContact: (id: number) => {
    const { contacts } = get();
    return contacts.find((contact) => contact.id === id);
  },

  updateContact: (id: number, newContact: Contact) => {
    set((state) => {
      const index = state.contacts.findIndex((contact) => contact.id === id);
      if (index === -1) {
        return state; // No update if contact not found
      }
      // Update the specific contact
      const updatedContacts = [...state.contacts];
      updatedContacts[index] = newContact;
      return { contacts: updatedContacts };
    });
  },
}));

export default useContactStore;
