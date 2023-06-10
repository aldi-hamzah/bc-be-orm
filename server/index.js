import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import routes from './routes/indexRoute';
import models, { sequelize } from './models/init-models';

const port = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(compression());

app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

app.use(`/regions`, routes.regionRoute);
app.use(`/countries`, routes.countriesRoute);
app.use(`/departments`, routes.departmentsRoute);
app.use(`/employees`, routes.employeesRoute);
app.use(`/jobhistory`, routes.jobHistoryRoute);
app.use(`/jobs`, routes.jobsRoute);
app.use(`/locations`, routes.locationsRoute);

const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
  if (dropDatabaseSync) {
    console.log('Database do not drop!');
  }
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
});

export default app;
