import React from 'react';
import { render, fireEvent, wait, queryAllByTestId } from '@testing-library/react';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
import { missionsFixture } from './components/MissionsList.test' 
import App from './App';
import { act } from 'react-dom/test-utils';

jest.mock('./api/fetchMissions');
console.log(mockFetchMissions)

test("App fetches and renders missions data", async ()=> {
    mockFetchMissions.mockResolvedValueOnce(missionsFixture);

    const {getByText, queryAllByTestId} = render(<App />);

    const button = getByText(/get data/i);
  
    await waitFor(() => {
        
    });
    fireEvent.click(button);

    getByText(/we are fetching data/i);

    
    const missionElems = await queryAllByTestId('mission')
    
    expect (missionElems).toHaveLength(2);

    // await wait();
    // expect(queryAllByTestId('mission')).toHaveLength(0);
    
})
