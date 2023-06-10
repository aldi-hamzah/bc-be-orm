import _sequelize from 'sequelize';
const DataTypes = _sequelize.DataTypes;
import _categories from './categories.js';
import _countries from './countries.js';
import _customers from './customers.js';
import _departments from './departments.js';
import _employees from './employees.js';
import _job_history from './job_history.js';
import _jobs from './jobs.js';
import _locations from './locations.js';
import _order from './order.js';
import _orders from './orders.js';
import _orders_detail from './orders_detail.js';
import _products from './products.js';
import _region from './region.js';
import _regions from './regions.js';
import _shipper from './shipper.js';
import _suppliers from './suppliers.js';

import config from '../../config/config.js';

const sequelize = new _sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

function initModels(sequelize) {
  const categories = _categories.init(sequelize, DataTypes);
  const countries = _countries.init(sequelize, DataTypes);
  const customers = _customers.init(sequelize, DataTypes);
  const departments = _departments.init(sequelize, DataTypes);
  const employees = _employees.init(sequelize, DataTypes);
  const job_history = _job_history.init(sequelize, DataTypes);
  const jobs = _jobs.init(sequelize, DataTypes);
  const locations = _locations.init(sequelize, DataTypes);
  const order = _order.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const orders_detail = _orders_detail.init(sequelize, DataTypes);
  const products = _products.init(sequelize, DataTypes);
  const region = _region.init(sequelize, DataTypes);
  const regions = _regions.init(sequelize, DataTypes);
  const shipper = _shipper.init(sequelize, DataTypes);
  const suppliers = _suppliers.init(sequelize, DataTypes);

  order.belongsToMany(products, {
    as: 'ordet_prod_id_products',
    through: orders_detail,
    foreignKey: 'ordet_order_id',
    otherKey: 'ordet_prod_id',
  });
  products.belongsToMany(order, {
    as: 'ordet_order_id_orders',
    through: orders_detail,
    foreignKey: 'ordet_prod_id',
    otherKey: 'ordet_order_id',
  });
  locations.belongsTo(countries, { as: 'country', foreignKey: 'country_id' });
  countries.hasMany(locations, { as: 'locations', foreignKey: 'country_id' });
  employees.belongsTo(departments, {
    as: 'department_department',
    foreignKey: 'department_id',
  });
  departments.hasMany(employees, {
    as: 'employees',
    foreignKey: 'department_id',
  });
  job_history.belongsTo(departments, {
    as: 'department',
    foreignKey: 'department_id',
  });
  departments.hasMany(job_history, {
    as: 'job_histories',
    foreignKey: 'department_id',
  });
  departments.belongsTo(employees, { as: 'manager', foreignKey: 'manager_id' });
  employees.hasMany(departments, {
    as: 'departments',
    foreignKey: 'manager_id',
  });
  employees.belongsTo(employees, { as: 'manager', foreignKey: 'manager_id' });
  employees.hasMany(employees, { as: 'employees', foreignKey: 'manager_id' });
  employees.belongsTo(jobs, { as: 'job', foreignKey: 'job_id' });
  jobs.hasMany(employees, { as: 'employees', foreignKey: 'job_id' });
  job_history.belongsTo(jobs, { as: 'job', foreignKey: 'job_id' });
  jobs.hasMany(job_history, { as: 'job_histories', foreignKey: 'job_id' });
  departments.belongsTo(locations, {
    as: 'location',
    foreignKey: 'location_id',
  });
  locations.hasMany(departments, {
    as: 'departments',
    foreignKey: 'location_id',
  });
  countries.belongsTo(regions, { as: 'region', foreignKey: 'region_id' });
  regions.hasMany(countries, { as: 'countries', foreignKey: 'region_id' });
  products.belongsTo(categories, {
    as: 'prod_cate',
    foreignKey: 'prod_cate_id',
  });
  categories.hasMany(products, { as: 'products', foreignKey: 'prod_cate_id' });
  order.belongsTo(customers, { as: 'order_cust', foreignKey: 'order_cust_id' });
  customers.hasMany(order, { as: 'orders', foreignKey: 'order_cust_id' });
  orders.belongsTo(customers, {
    as: 'order_cust',
    foreignKey: 'order_cust_id',
  });
  customers.hasMany(orders, {
    as: 'order_cust_orders',
    foreignKey: 'order_cust_id',
  });
  orders_detail.belongsTo(order, {
    as: 'ordet_order',
    foreignKey: 'ordet_order_id',
  });
  order.hasMany(orders_detail, {
    as: 'orders_details',
    foreignKey: 'ordet_order_id',
  });
  orders_detail.belongsTo(products, {
    as: 'ordet_prod',
    foreignKey: 'ordet_prod_id',
  });
  products.hasMany(orders_detail, {
    as: 'orders_details',
    foreignKey: 'ordet_prod_id',
  });
  order.belongsTo(shipper, { as: 'order_ship', foreignKey: 'order_ship_id' });
  shipper.hasMany(order, { as: 'orders', foreignKey: 'order_ship_id' });
  orders.belongsTo(shipper, { as: 'order_ship', foreignKey: 'order_ship_id' });
  shipper.hasMany(orders, {
    as: 'order_ship_orders',
    foreignKey: 'order_ship_id',
  });
  products.belongsTo(suppliers, {
    as: 'prod_supr',
    foreignKey: 'prod_supr_id',
  });
  suppliers.hasMany(products, { as: 'products', foreignKey: 'prod_supr_id' });

  return {
    categories,
    countries,
    customers,
    departments,
    employees,
    job_history,
    jobs,
    locations,
    order,
    orders,
    orders_detail,
    products,
    region,
    regions,
    shipper,
    suppliers,
  };
}

const models = initModels(sequelize);
export default models;
export { sequelize };
