exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        "appclips": {
            "apps": ["N8XX8N8753.com.Peloton.PelotonApp.AppClip"]
        }
    })
  };
};
