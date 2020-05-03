import React, { Component } from "react";
import plans from "../../assets/api/plans";

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plans,
    };
  }

  render() {
    const plans = this.state.plans;

    // console.log(plans.features[0]);

    return (
      <section>
        <div className="container">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Pricing</h1>
            <p className="lead">Here are our pricing plans</p>
          </div>
        </div>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {plans.map((plan) => (
              <div className="card mb-4 shadow-sm" key={plan.id}>
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{plan.title}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    ${plan.price} <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{plan.features}</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default Pricing;
