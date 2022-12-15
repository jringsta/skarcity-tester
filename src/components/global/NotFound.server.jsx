import {Button} from '~/components';
import {Layout} from '~/components/index.server';

export function NotFound({response, type = 'page'}) {
  if (response) {
    response.status = 404;
    response.statusText = 'Not found';
  }

  return (
    <Layout>
      <div className="not-found-container">
        <div className="not-found-bubble">
          <div className="not-found-text" style={{paddingBottom: '2rem'}}>
            {`We couldn’t find the ${type} you’re looking for. Try checking the URL or heading back to the home page.`}
          </div>
          <Button width="auto" variant="secondary" to={'/'}>
            Take me to the home page
          </Button>
        </div>
      </div>
    </Layout>
  );
}
