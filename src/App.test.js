import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import {fetchMissions as mockFetchMissions} from './api/fetchMissions';
import App from './App';

import {missionsFixture} from './components/MissionsList.test';
import { act } from 'react-dom/test-utils';

jest.mock("./api/fetchMissions");
// console.log("bk: App.test.js: mockFetchMissions: ", mockFetchMissions);

test("App fetches and renders missions data", async ()=>{
  // expect(false).toBe(false);
  mockFetchMissions.mockResolvedValueOnce({data: missionsFixture});

  const {getByText, queryAllByTestId} = render(<App />);

  const button = getByText(/get data/i);
  fireEvent.click(button);
  getByText(/we are fetching data/i);

  await waitFor(()=>{
    expect(queryAllByTestId("mission")).toHaveLength(2);
  });
})