import { sequelize } from '../models/init-models';

const findAll = async (req, res) => {
  try {
    const region = await req.context.models.countries.findAll();
    return res.send(region);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const countries = await req.context.models.countries.findOne({
      where: { country_id: req.params.id },
    });
    return res.send(countries);
  } catch (error) {
    return res.send(error);
  }
};

const created = async (req, res) => {
  try {
    const { country_id, country_name, region_id } = req.body;
    const countries = await req.context.models.countries.create({
      country_id: country_id,
      country_name: country_name,
      region_id: region_id,
    });
    return res.send(countries);
  } catch (error) {
    return res.send(error);
  }
};

const updated = async (req, res) => {
  try {
    const { country_id, country_name, region_id } = req.body;
    const countries = await req.context.models.countries.update(
      {
        country_id: country_id,
        country_name: country_name,
        region_id: region_id,
      },
      {
        returning: true,
        where: { country_id: req.params.id },
      }
    );
    return res.send(countries);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const countries = await req.context.models.countries.destroy({
      where: { country_id: req.params.id },
    });
    return res.send(`Delete ${countries} row`);
  } catch (error) {
    res.send(error);
  }
};

export default {
  findAll,
  findOne,
  created,
  updated,
  deleted,
};
