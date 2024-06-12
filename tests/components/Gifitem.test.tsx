
import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components';


const image:any ={
      id: "w2aaw",
      title: "string",
      url: "555"
  }

describe('sum module', () => {

  test('Render proptypes', () => {
        render(<GifItem image={image}/>);
        const {src,alt,title}= screen.getByRole('img') as HTMLImageElement;
        expect(src).toBe("http://localhost/555");
        expect(alt).toBeTruthy();
        
  });
  
});