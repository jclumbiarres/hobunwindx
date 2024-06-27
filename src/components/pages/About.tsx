import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })

export const About = () => {
  return (
    <>
    <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
    <div style={{ width: '32px', height: '32px' }} dangerouslySetInnerHTML={{ __html: camera.html[0] }}></div>
    </>
  );
};
