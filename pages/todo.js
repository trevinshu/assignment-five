import { AppBar } from 'components/appbar';
import { Title } from 'ui/title';
import { useAuth } from 'lib/hooks/useAuth';

function ToDoPage(props) {
  const user = useAuth();
  if (user) {
    return (
      <>
        <AppBar />
        <Title> Render Build The To Do List</Title>
      </>
    );
  }
  return (
    <>
      <AppBar />
      <Title> Please Go Away</Title>
    </>
  );
}

export default ToDoPage;
