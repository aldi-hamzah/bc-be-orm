const findAll = async (req, res) => {
  try {
    const locations = await req.context.models.locations.findAll();
    return res.send(locations);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const locations = await req.context.models.locations.findOne({
      where: { location_id: req.params.id },
    });
    return res.send(locations);
  } catch (error) {
    return res.send(error);
  }
};

const created = async (req, res) => {
  const {
    location_id,
    street_address,
    postal_code,
    city,
    state_province,
    country_id,
  } = req.body;
  try {
    const locations = await req.context.models.locations.create({
      location_id: location_id,
      street_address: street_address,
      postal_code: postal_code,
      city: city,
      state_province: state_province,
      country_id: country_id,
    });
    return res.send(locations);
  } catch (error) {
    return res.send(error);
  }
};

const updated = async (req, res) => {
  try {
    const {
      location_id,
      street_address,
      postal_code,
      city,
      state_province,
      country_id,
    } = req.body;
    const locations = await req.context.models.locations.update(
      {
        street_address: street_address,
        postal_code: postal_code,
        city: city,
        state_province: state_province,
        country_id: country_id,
      },
      {
        returning: true,
        where: { location_id: req.params.id },
      }
    );
    return res.send(locations);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const locations = await req.context.models.locations.destroy({
      where: { location_id: req.params.id },
    });
    return res.send(`Delete ${locations} row!`);
  } catch (error) {
    return res.send(error);
  }
};

export default {
  findAll,
  findOne,
  created,
  updated,
  deleted,
};
