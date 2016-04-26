feature 'movies' do
  context 'no movies have been added' do
    scenario 'should display promt to add a movie' do
      visit '/'
      expect(page).to have_content 'No movies added yet'
      # expect(page).to have_link 'Add a movie'
    end
  end
end
