feature 'movies' do
  context 'no movies have been added' do
    scenario 'should display promt to add a movie' do
      visit '/'
      click_link('Sign up')
      fill_in('Email', with: 'test@example.com')
      fill_in('Password', with: 'testtest')
      fill_in('Password confirmation', with: 'testtest')
      click_button('Sign up')
      visit '/users/1/movie'
      expect(page).to have_content 'No movies added yet'
      # expect(page).to have_link 'Add a movie'
    end
  end
end
