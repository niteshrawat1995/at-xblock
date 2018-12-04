"""Setup for atxblock XBlock."""

import os
from setuptools import setup


def package_data(pkg, roots):
    """Generic function to find package_data.

    All of the files under each of the `roots` will be declared as package
    data for package `pkg`.

    """
    data = []
    for root in roots:
        for dirname, _, files in os.walk(os.path.join(pkg, root)):
            for fname in files:
                data.append(os.path.relpath(os.path.join(dirname, fname), pkg))

    return {pkg: data}


setup(
    name='at-xblock',
    version='1.0',
    description='An xblock to put atblock on Open edX pages',
    license='AGPL v3',
    packages=[
        'atxblock',
    ],
    install_requires=[
        'XBlock',
        'xblock-utils'
    ],
    entry_points={
        'xblock.v1': [
            'atxblock = atxblock:AtXBlock',
        ]
    },
    package_data=package_data("atxblock", ["static", "public"]),
)
