const user_router = require('./routes/UserRouting');
const bodyParser = require("body-parser");
const app = express();
const errorLogger = require("./utilities/errorLogger");
const requestLogger = require("./utilities/requestLogger");
const PORT = process.env.PORT || 1111;


app.use(bodyParser.json());
app.use(requestLogger);
app.use('/', user_router);
app.use(errorLogger);
app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))