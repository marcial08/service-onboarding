import app from './app'
import './util/initialSetup'

app.listen(app.get('port'))

console.log('Server running on port', app.get('port'))
