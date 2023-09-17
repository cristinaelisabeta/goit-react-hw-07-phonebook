import { Form } from './Form/Form';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import {
  errorSelector,
  loadingSelector,
} from 'redux/contacts/contacts-selectors';
import { MutatingDots } from 'react-loader-spinner';

const App = () => {
  const customError = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        {customError && <p>{customError}</p>}
        {!customError && <ContactList />}
        {loading && (
          <div display="block" marginLeft="auto" marginRight="auto">
            <MutatingDots
              height="200"
              width="200"
              color="#211022"
              secondaryColor="#00ccff"
              radius="20"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
      </Section>
    </div>
  );
};

export { App };
